export class ZwiftWorkout {
  constructor(contents) {
    this.contents = contents;
  }

  optimize(options) {
    const statistics = {
      steadyStateToIntervals: {
        amount: 0,
        durationInSeconds: 0,
      },
      cooldownOrWarmupToIntervals: {
        amount: 0,
        durationInSeconds: 0,
      },
    };
    const currentWorkoutBlocks = this.contents[0].workout_file.find(
      (entry) => entry.workout
    ).workout;
    const resultWorkoutBlocks = currentWorkoutBlocks
      .map((segment) => {
        if (segment.SteadyState) {
          return this.transformSteadyStateBlockToIntervalBlock(
            segment,
            statistics,
            options
          );
        } else if (segment.Warmup) {
          return this.transformWarmupBlockToIntervalBlock(
            segment,
            statistics,
            options
          );
        } else if (segment.Cooldown) {
          return this.transformWarmupBlockToIntervalBlock(
            segment,
            statistics,
            options
          );
        } else {
          return segment;
        }
      })
      .flatMap((item) => item);

    this.contents[0].workout_file.find((entry) => entry.workout).workout =
      resultWorkoutBlocks;
    this.contents[0].workout_file.find((entry) => entry.name).name[0][
      "#text"
    ] += " (optimized)";

    this.reportOptimizationStatistics(statistics);
  }

  transformSteadyStateBlockToIntervalBlock(block, statistics, options) {
    const { minimumDuration, intervalsDuration } = options;
    const attributePower = Number.parseFloat(block[":@"].attributePower);
    const attributeDuration = Number.parseInt(block[":@"].attributeDuration);

    if (attributeDuration >= minimumDuration) {
      const amountOfChoppedIntervals = Math.ceil(
        attributeDuration / intervalsDuration
      );
      const replacementSegments = Array.from(
        Array(amountOfChoppedIntervals).keys()
      ).map(() => ({
        IntervalsT: [],
        ":@": {
          attributeRepeat: "1",
          attributeOnDuration: `${intervalsDuration / 2}`,
          attributeOnPower: `${attributePower}`,
          attributeOffDuration: `${intervalsDuration / 2}`,
          attributeOffPower: `${attributePower}`,
        },
      }));
      statistics.steadyStateToIntervals.amount++;
      statistics.steadyStateToIntervals.durationInSeconds += attributeDuration;
      return replacementSegments;
    } else {
      return block;
    }
  }

  transformWarmupBlockToIntervalBlock(block, statistics, options) {
    const { minimumDuration, recoveryIntervalDuration } = options;
    const attributePowerHigh = Number.parseFloat(
      block[":@"].attributePowerHigh
    );
    const attributePowerLow = Number.parseFloat(block[":@"].attributePowerLow);
    const attributeDuration = Number.parseInt(block[":@"].attributeDuration);
    const warmupPowerDelta = attributePowerHigh - attributePowerLow;

    if (attributeDuration >= minimumDuration) {
      const amountOfChoppedIntervals = Math.ceil(
        attributeDuration / recoveryIntervalDuration
      );
      const replacementSegments = Array.from(
        Array(amountOfChoppedIntervals).keys()
      ).map((index) => {
        const power = (
          attributePowerLow +
          (index / amountOfChoppedIntervals) * warmupPowerDelta
        ).toFixed(3);
        const duration = recoveryIntervalDuration / 2;
        return {
          IntervalsT: [],
          ":@": {
            attributeRepeat: "1",
            attributeOnDuration: `${duration}`,
            attributeOnPower: `${power}`,
            attributeOffDuration: `${duration}`,
            attributeOffPower: `${power}`,
          },
        };
      });
      statistics.cooldownOrWarmupToIntervals.amount++;
      statistics.cooldownOrWarmupToIntervals.durationInSeconds +=
        attributeDuration;
      return replacementSegments;
    } else {
      return block;
    }
  }

  reportOptimizationStatistics(statistics) {
    const replacedSteadyStateDurationInMinutes = Math.round(
      statistics.steadyStateToIntervals.durationInSeconds / 60
    );
    const replacedWarmupOrCooldownDurationInMinutes = Math.round(
      statistics.cooldownOrWarmupToIntervals.durationInSeconds / 60
    );
    const addedXp =
      replacedSteadyStateDurationInMinutes * 2 +
      replacedWarmupOrCooldownDurationInMinutes * 6;

    console.info(
      `Workout optimization added ${addedXp} XP!\n - ${replacedSteadyStateDurationInMinutes}m steady state blocks replaced with intervals: ${
        replacedSteadyStateDurationInMinutes * 2
      } extra XP\n - ${replacedWarmupOrCooldownDurationInMinutes}m warmup and cooldown blocks replaced with intervals: ${
        replacedWarmupOrCooldownDurationInMinutes * 6
      } extra XP`
    );
  }
}
