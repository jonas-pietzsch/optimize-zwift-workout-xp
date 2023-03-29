import { ZwiftWorkoutParser } from "./ZwiftWorkoutParser.js";
import * as fs from "fs";
import cloneDeep from "lodash/cloneDeep";

describe("ZwiftWorkout", () => {
  describe("optimize", () => {
    it("should return the optimized workout", () => {
      const sampleWorkout = ZwiftWorkoutParser.parseZwoFile(
        fs.readFileSync("./sample.zwo")
      );
      const { optimizedWorkout } = sampleWorkout.optimize({
        minimumDuration: 120,
        intervalsDuration: 120,
        skipReportOutput: true,
      });

      expect(optimizedWorkout.contents).toMatchSnapshot();
    });

    it("should not modify the original contents of the workout", () => {
      const sampleWorkout = ZwiftWorkoutParser.parseZwoFile(
        fs.readFileSync("./sample.zwo")
      );
      const originalSampleWorkout = cloneDeep(sampleWorkout);

      const { optimizedWorkout } = sampleWorkout.optimize({
        minimumDuration: 120,
        intervalsDuration: 120,
        skipReportOutput: true,
      });

      expect(sampleWorkout.contents).toEqual(originalSampleWorkout.contents);
      expect(optimizedWorkout.contents).not.toEqual(sampleWorkout.contents);
    });

    it("should return statistics and optimization results", () => {
      const sampleWorkout = ZwiftWorkoutParser.parseZwoFile(
        fs.readFileSync("./sample.zwo")
      );

      const { statistics, optimizationResults } = sampleWorkout.optimize({
        minimumDuration: 120,
        intervalsDuration: 120,
        skipReportOutput: true,
      });

      expect(statistics).toEqual({
        cooldownOrWarmupToIntervals: {
          amount: 2,
          durationInSeconds: 2000,
        },
        steadyStateToIntervals: {
          amount: 7,
          durationInSeconds: 1620,
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
