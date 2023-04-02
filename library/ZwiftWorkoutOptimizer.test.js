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
        cooldownToIntervals: {
          amount: 1,
          durationSeconds: 1080,
        },
        warmupToIntervals: {
          amount: 1,
          durationSeconds: 920,
        },
        steadyStateToIntervals: {
          amount: 7,
          durationSeconds: 1620,
        },
      });
      expect(optimizationResults).toEqual({
        warmupToIntervals: {
          minutes: 15.333333333333334,
          xp: 92,
        },
        cooldownToIntervals: {
          minutes: 18,
          xp: 108,
        },
        steadyStateToIntervals: {
          minutes: 27,
          xp: 54,
        },
        totalMinutes: 60.333333333333334,
        totalXp: 254,
      });
    });
  });
});
