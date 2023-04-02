import cloneDeep from "lodash/cloneDeep.js";
import { buildOptions } from "./options.js";

export class ZwiftWorkoutOptimizer {
  static optimize(originalWorkout, customOptions) {
    const options = buildOptions(customOptions);
    const workout = cloneDeep(originalWorkout);
    const statistics = {
      steadyStateToIntervals: {
        amount: 0,
        durationSeconds: 0,
      },
      warmupToIntervals: {
        amount: 0,
        durationSeconds: 0,
      },
      cooldownToIntervals: {
        amount: 0,
        durationSeconds: 0,
      },
    };
    [statistics, workout, options].forEach(Object.freeze);

    const resultWorkoutBlocks = workout.trainingBlocks
      .map((block) => {
        if (block.SteadyState && options.steadyStateBlocks.optimize) {
          return ZwiftWorkoutOptimizer.transformSteadyStateBlockToIntervalBlock(
            block,
            statistics,
            options
          );
        } else if (
          (block.Warmup && options.warmupAndCooldownBlocks.optimizeWarmup) ||
          (block.Cooldown && options.warmupAndCooldownBlocks.optimizeCooldown)
        ) {
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
    workout.addTag("XP optimized");

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
    const {
      steadyStateBlocks: {
        minimumDurationSeconds,
        replacementBlocksDurationSeconds,
      },
    } = options;
    const { attributePower, attributeDuration, ...otherBlockAttributes } =
      block[":@"];
    const attributePowerParsed = Number.parseFloat(attributePower);
    const attributeDurationParsed = Number.parseInt(attributeDuration);

    if (attributeDurationParsed >= minimumDurationSeconds) {
      const amountOfIntervalBlockReplacements =
        attributeDurationParsed / replacementBlocksDurationSeconds;
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
          attributeOnDuration: `${replacementBlocksDurationSeconds / 2}`,
          attributeOnPower: `${attributePowerParsed}`,
          attributeOffDuration: `${replacementBlocksDurationSeconds / 2}`,
          attributeOffPower: `${attributePowerParsed}`,
        },
      }));

      const partialIntervalBlockReplacementIsRequired =
        amountOfIntervalBlockReplacements >
        amountOfWholeIntervalBlockReplacements;
      if (partialIntervalBlockReplacementIsRequired) {
        const partialDuration =
          replacementBlocksDurationSeconds *
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
      statistics.steadyStateToIntervals.durationSeconds +=
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
    const { replacementBlocksDurationSeconds } =
      options.warmupAndCooldownBlocks;
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

    if (
      attributeDurationParsed >=
      options.warmupAndCooldownBlocks.minimumDurationSeconds
    ) {
      const amountOfIntervalBlockReplacements =
        attributeDurationParsed / replacementBlocksDurationSeconds;
      const amountOfWholeIntervalBlockReplacements = Math.floor(
        amountOfIntervalBlockReplacements
      );
      const replacementBlocks = Array.from(
        Array(amountOfWholeIntervalBlockReplacements).keys()
      ).map((blockIndex) => {
        const onSegmentIndex = blockIndex * 2;
        const offSegmentIndex = blockIndex * 2 + 1;
        const onPower =
          attributePowerLowParsed +
          (onSegmentIndex / (amountOfWholeIntervalBlockReplacements * 2)) *
            warmupPowerDelta;
        const offPower =
          attributePowerLowParsed +
          (offSegmentIndex / (amountOfWholeIntervalBlockReplacements * 2)) *
            warmupPowerDelta;
        const duration = replacementBlocksDurationSeconds / 2;
        return {
          IntervalsT: [],
          ":@": {
            ...otherBlockAttributes,
            attributeRepeat: "1",
            attributeOnDuration: `${duration.toFixed(0)}`,
            attributeOnPower: `${onPower.toFixed(3)}`,
            attributeOffDuration: `${duration.toFixed(0)}`,
            attributeOffPower: `${offPower.toFixed(3)}`,
          },
        };
      });

      const partialIntervalBlockReplacementIsRequired =
        amountOfIntervalBlockReplacements >
        amountOfWholeIntervalBlockReplacements;
      if (partialIntervalBlockReplacementIsRequired) {
        const partialDuration =
          replacementBlocksDurationSeconds *
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

      if (block.Warmup) {
        statistics.warmupToIntervals.amount++;
        statistics.warmupToIntervals.durationSeconds += attributeDurationParsed;
      } else {
        statistics.cooldownToIntervals.amount++;
        statistics.cooldownToIntervals.durationSeconds +=
          attributeDurationParsed;
      }
      return replacementBlocks;
    } else {
      return block;
    }
  }

  static calculateOptimizationResult(statistics) {
    const result = {
      steadyStateToIntervals: {
        minutes: statistics.steadyStateToIntervals.durationSeconds / 60,
      },
      cooldownToIntervals: {
        minutes: statistics.cooldownToIntervals.durationSeconds / 60,
      },
      warmupToIntervals: {
        minutes: statistics.warmupToIntervals.durationSeconds / 60,
      },
    };
    result.steadyStateToIntervals.xp =
      result.steadyStateToIntervals.minutes * 2;
    result.cooldownToIntervals.xp = result.cooldownToIntervals.minutes * 6;
    result.warmupToIntervals.xp = result.warmupToIntervals.minutes * 6;
    result.totalXp = Object.values(result).reduce(
      (res, cur) => res + cur.xp,
      0
    );
    result.totalMinutes = Object.values(result).reduce(
      (res, cur) => res + (typeof cur === "object" ? cur.minutes : 0),
      0
    );
    return result;
  }

  static reportOptimizationResults(optimizationResults) {
    console.info(
      [
        `Workout optimization added ${optimizationResults.totalXp.toFixed(
          0
        )} XP!`,
        ` - ${optimizationResults.steadyStateToIntervals.minutes.toFixed(
          0
        )}m steady state blocks replaced with intervals: ${optimizationResults.steadyStateToIntervals.xp.toFixed(
          0
        )} extra XP`,
        ` - ${optimizationResults.cooldownToIntervals.minutes.toFixed(
          0
        )}m cooldown blocks replaced with intervals: ${optimizationResults.cooldownToIntervals.xp.toFixed()} extra XP`,
        ` - ${optimizationResults.warmupToIntervals.minutes.toFixed(
          0
        )}m warmup blocks replaced with intervals: ${optimizationResults.warmupToIntervals.xp.toFixed()} extra XP`,
      ].join("\n")
    );
  }
}
