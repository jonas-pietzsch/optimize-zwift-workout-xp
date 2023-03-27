import { XMLParser, XMLBuilder } from "fast-xml-parser";
import { ZwiftWorkout } from "./ZwiftWorkout.js";

const options = {
  ignoreAttributes: false,
  attributeNamePrefix: "attribute",
  preserveOrder: true,
};

export class ZwiftWorkoutParser {
  static parseZwiftWorkoutFile(fileBuffer) {
    const parser = new XMLParser(options);
    const parsedWorkoutFile = parser.parse(fileBuffer.toString());
    return new ZwiftWorkout(parsedWorkoutFile);
  }

  static assembleZwiftWorkoutFile(zwiftWorkout) {
    const builder = new XMLBuilder({
      ...options,
      format: true,
    });
    return builder.build(zwiftWorkout.contents);
  }
}
