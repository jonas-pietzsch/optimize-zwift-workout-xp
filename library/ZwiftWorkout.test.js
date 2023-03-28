import { ZwiftWorkoutParser } from "./ZwiftWorkoutParser.js";
import * as fs from "fs";

describe("ZwiftWorkout", () => {
  describe("optimize", () => {
    it("should optimize the workout", () => {
      const sampleWorkout = ZwiftWorkoutParser.parseZwiftWorkoutFile(
        fs.readFileSync("./sample.zwo")
      );
      sampleWorkout.optimize({
        minimumDuration: 120,
        intervalsDuration: 120,
      });

      expect(sampleWorkout.contents).toMatchSnapshot();
    });
  });
});
