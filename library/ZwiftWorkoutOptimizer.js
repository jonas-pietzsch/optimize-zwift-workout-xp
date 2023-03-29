import cloneDeep from "lodash/cloneDeep.js";

export class ZwiftWorkoutOptimizer {
  static optimize(originalWorkout, options) {
    const workout = cloneDeep(originalWorkout);
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
    [statistics, workout, options].forEach(Object.freeze);

    const resultWorkoutBlocks = workout.trainingBlocks
      .map((block) => {
        if (block.SteadyState) {
          return ZwiftWorkoutOptimizer.transformSteadyStateBlockToIntervalBlock(
            block,
            statistics,
            options
          );
        } else if (block.Warmup || block.Cooldown) {
          return ZwiftWorkoutOptimizer.transformWarmupOrCooldownBlockToIntervalBlock(
            block,
            statistics,
            options
          );
        } else {
          return block;
        }
      })
      .flatMap((item) => item);

    workout.trainingBlocks = resultWorkoutBlocks;
    workout.name = workout.name += " (optimized)";

    const optimizationResults =
      ZwiftWorkoutOptimizer.calculateOptimizationResult(statistics);
    if (!options.skipReportOutput) {
      ZwiftWorkoutOptimizer.reportOptimizationResults(optimizationResults);
    }
    return {
      statistics,
      optimizationResults,
      optimizedWorkout: workout,
    };
  }

  static transformSteadyStateBlockToIntervalBlock(block, statistics, options) {
    const { minimumSteadyStateBlockDurationSeconds, intervalsDuration } =
      options;
    const { attributePower, attributeDuration, ...otherBlockAttributes } =
      block[":@"];
    const attributePowerParsed = Number.parseFloat(attributePower);
    const attributeDurationParsed = Number.parseInt(attributeDuration);

    if (attributeDurationParsed >= minimumSteadyStateBlockDurationSeconds) {
      const amountOfIntervalBlockReplacements =
        attributeDurationParsed / intervalsDuration;
      const amountOfWholeIntervalBlockReplacements = Math.floor(
        amountOfIntervalBlockReplacements
      );
      const replacementBlocks = Array.from(
        Array(amountOfWholeIntervalBlockReplacements).keys()
      ).map(() => ({
        IntervalsT: [],
        ":@": {
          ...otherBlockAttributes,
          attributeRepeat: "1",
          attributeOnDuration: `${intervalsDuration / 2}`,
          attributeOnPower: `${attributePowerParsed}`,
          attributeOffDuration: `${intervalsDuration / 2}`,
          attributeOffPower: `${attributePowerParsed}`,
        },
      }));

      const partialIntervalBlockReplacementIsRequired =
        amountOfIntervalBlockReplacements >
        amountOfWholeIntervalBlockReplacements;
      if (partialIntervalBlockReplacementIsRequired) {
        const partialDuration =
          intervalsDuration *
          (amountOfIntervalBlockReplacements -
            amountOfWholeIntervalBlockReplacements);
        replacementBlocks.push({
          IntervalsT: [],
          ":@": {
            ...otherBlockAttributes,
            attributeRepeat: "1",
            attributeOnDuration: `${(partialDuration / 2).toFixed(0)}`,
            attributeOnPower: `${attributePowerParsed}`,
            attributeOffDuration: `${(partialDuration / 2).toFixed(0)}`,
            attributeOffPower: `${attributePowerParsed}`,
          },
        });
      }

      statistics.steadyStateToIntervals.amount++;
      statistics.steadyStateToIntervals.durationInSeconds +=
        attributeDurationParsed;
      return replacementBlocks;
    } else {
      return block;
    }
  }

  static transformWarmupOrCooldownBlockToIntervalBlock(
    block,
    statistics,
    options
  ) {
    const { minimumWarmupOrCooldownDurationSeconds } = options;
    // TODO: use a specific intervals duration for warmup/cooldown blocks from the options
    const intervalsDuration = 30;
    const blockAttributes = block[":@"];
    const {
      attributePowerHigh,
      attributePowerLow,
      attributeDuration,
      ...otherBlockAttributes
    } = blockAttributes;
    const attributePowerHighParsed = Number.parseFloat(attributePowerHigh);
    const attributePowerLowParsed = Number.parseFloat(attributePowerLow);
    const attributeDurationParsed = Number.parseInt(attributeDuration);
    const warmupPowerDelta = attributePowerHighParsed - attributePowerLowParsed;

    if (attributeDurationParsed >= minimumWarmupOrCooldownDurationSeconds) {
      const amountOfIntervalBlockReplacements =
        attributeDurationParsed / intervalsDuration;
      const amountOfWholeIntervalBlockReplacements = Math.floor(
        amountOfIntervalBlockReplacements
      );
      const replacementBlocks = Array.from(
        Array(amountOfWholeIntervalBlockReplacements).keys()
      ).map((index) => {
        const power = (
          attributePowerLowParsed +
          (index / amountOfWholeIntervalBlockReplacements) * warmupPowerDelta
        ).toFixed(3);
        const duration = intervalsDuration / 2;
        return {
          IntervalsT: [],
          ":@": {
            ...otherBlockAttributes,
            attributeRepeat: "1",
            attributeOnDuration: `${duration.toFixed(0)}`,
            attributeOnPower: `${power}`,
            attributeOffDuration: `${duration.toFixed(0)}`,
            attributeOffPower: `${power}`,
          },
        };
      });

      const partialIntervalBlockReplacementIsRequired =
        amountOfIntervalBlockReplacements >
        amountOfWholeIntervalBlockReplacements;
      if (partialIntervalBlockReplacementIsRequired) {
        const partialDuration =
          intervalsDuration *
          (amountOfIntervalBlockReplacements -
            amountOfWholeIntervalBlockReplacements);
        replacementBlocks.push({
          IntervalsT: [],
          ":@": {
            ...otherBlockAttributes,
            attributeRepeat: "1",
            attributeOnDuration: `${(partialDuration / 2).toFixed(0)}`,
            attributeOnPower: `${attributePowerHighParsed}`,
            attributeOffDuration: `${(partialDuration / 2).toFixed(0)}`,
            attributeOffPower: `${attributePowerHighParsed}`,
          },
        });
      }

      statistics.cooldownOrWarmupToIntervals.amount++;
      statistics.cooldownOrWarmupToIntervals.durationInSeconds +=
        attributeDurationParsed;
      return replacementBlocks;
    } else {
      return block;
    }
  }

  static calculateOptimizationResult(statistics) {
    const result = {
      steadyStateToIntervals: {
        minutes: statistics.steadyStateToIntervals.durationInSeconds / 60,
      },
      cooldownOrWarmupToIntervals: {
        minutes: statistics.cooldownOrWarmupToIntervals.durationInSeconds / 60,
      },
    };
    result.steadyStateToIntervals.xp =
      result.steadyStateToIntervals.minutes * 2;
    result.cooldownOrWarmupToIntervals.xp =
      result.cooldownOrWarmupToIntervals.minutes * 6;
    result.totalXp = Object.values(result).reduce(
      (res, cur) => res + cur.xp,
      0
    );
    return result;
  }

  static reportOptimizationResults(optimizationResults) {
    console.info(
      `Workout optimization added ${optimizationResults.totalXp.toFixed(
        0
      )} XP!\n - ${optimizationResults.steadyStateToIntervals.minutes.toFixed(
        0
      )}m steady state blocks replaced with intervals: ${optimizationResults.steadyStateToIntervals.xp.toFixed(
        0
      )} extra XP\n - ${optimizationResults.cooldownOrWarmupToIntervals.minutes.toFixed(
        0
      )}m warmup and cooldown blocks replaced with intervals: ${optimizationResults.cooldownOrWarmupToIntervals.xp.toFixed()} extra XP`
    );
  }
}
