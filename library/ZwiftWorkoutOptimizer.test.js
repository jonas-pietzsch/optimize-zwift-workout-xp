import { ZwiftWorkoutParser } from "./ZwiftWorkoutParser.js";
import fs from "fs";
import cloneDeep from "lodash/cloneDeep.js";
import { ZwiftWorkoutOptimizer } from "./ZwiftWorkoutOptimizer.js";

describe("ZwiftWorkoutOptimizer", () => {
  describe("optimize", () => {
    let workout;

    beforeEach(() => {
      workout = ZwiftWorkoutParser.parseZwoFile(
        fs.readFileSync("./sample.zwo")
      );
    });

    it("should return the optimized workout", () => {
      const { optimizedWorkout } = ZwiftWorkoutOptimizer.optimize(workout, {
        skipReportOutput: true,
      });

      expect(optimizedWorkout.contents).toMatchSnapshot();
    });

    it("should not modify the original contents of the workout", () => {
      const originalSampleWorkout = cloneDeep(workout);

      const { optimizedWorkout } = ZwiftWorkoutOptimizer.optimize(workout, {
        skipReportOutput: true,
      });

      expect(workout.contents).toEqual(originalSampleWorkout.contents);
      expect(optimizedWorkout.contents).not.toEqual(workout.contents);
    });

    it("should return statistics and optimization results", () => {
      const { statistics, optimizationResults } =
        ZwiftWorkoutOptimizer.optimize(workout, {
          skipReportOutput: true,
        });

      expect(statistics).toEqual({
        cooldownOrWarmupToIntervals: {
          amount: 2,
          durationSeconds: 2000,
        },
        steadyStateToIntervals: {
          amount: 7,
          durationSeconds: 1620,
        },
      });
      expect(optimizationResults).toEqual({
        cooldownOrWarmupToIntervals: {
          minutes: 33.333333333333336,
          xp: 200,
        },
        steadyStateToIntervals: {
          minutes: 27,
          xp: 54,
        },
        totalXp: 254,
      });
    });
  });
});
