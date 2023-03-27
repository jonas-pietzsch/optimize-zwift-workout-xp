import { ZwiftWorkoutParser } from "./ZwiftWorkoutParser.js";
import * as fs from "fs";

describe("ZwiftWorkoutParser", () => {
  it("should parse zwo file contents to an object structure that preserves sorting, type and attribute of workout segments", () => {
    const workout = ZwiftWorkoutParser.parseZwiftWorkoutFile(
      fs.readFileSync("./sample.zwo")
    );
    expect(workout.contents).toMatchSnapshot();
  });

  it("should re-create the same zwo file contents when parsing it and generating it again without changes", () => {
    const originalFileBuffer = fs.readFileSync("./sample.zwo");
    const originalFileContentsWithoutWhitespaces = originalFileBuffer
      .toString()
      .replace(/\s/g, "");
    const workout =
      ZwiftWorkoutParser.parseZwiftWorkoutFile(originalFileBuffer);

    const targetFileContents =
      ZwiftWorkoutParser.assembleZwiftWorkoutFile(workout);
    const targetFileContentsWithoutWhitespaces = targetFileContents.replace(
      /\s/g,
      ""
    );

    expect(originalFileContentsWithoutWhitespaces).toEqual(
      targetFileContentsWithoutWhitespaces.replace("<tags></tags>", "<tags/>")
    );

    const workoutFromReGeneratedZwoFile =
      ZwiftWorkoutParser.parseZwiftWorkoutFile(Buffer.from(targetFileContents));

    expect(workout.contents).toEqual(workoutFromReGeneratedZwoFile.contents);
  });
});
