import { ZwiftWorkoutParser } from "./ZwiftWorkoutParser.js";
import fs from "fs";

describe("ZwiftWorkout", () => {
  let workout;

  beforeEach(() => {
    workout = ZwiftWorkoutParser.parseZwoFile(fs.readFileSync("./sample.zwo"));
  });

  describe("name", () => {
    test("getter should retrieve the workout name", () => {
      expect(workout.name).toEqual("Something");
    });

    test("setter should write the workout name", () => {
      workout.name = "Some modified value";
      expect(workout.name).toEqual("Some modified value");
    });
  });

  describe("trainingBlocks", () => {
    test("getter should retrieve the training blocks", () => {
      expect(workout.trainingBlocks).toMatchSnapshot();
    });

    test("setter should write the workout name", () => {
      workout.trainingBlocks = [];
      expect(workout.trainingBlocks).toEqual([]);
    });
  });
});
