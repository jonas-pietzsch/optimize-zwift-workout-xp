import { XMLParser, XMLBuilder } from "fast-xml-parser";
import { ZwiftWorkout } from "./ZwiftWorkout.js";

const options = {
  ignoreAttributes: false,
  attributeNamePrefix: "attribute",
  preserveOrder: true,
};

export class ZwiftWorkoutParser {
  static xmlParser = new XMLParser(options);
  static xmlBuilder = new XMLBuilder({ ...options, format: true });

  static parseZwoFile(fileBuffer) {
    const parsedWorkoutFile = ZwiftWorkoutParser.xmlParser.parse(
      fileBuffer.toString()
    );
    return new ZwiftWorkout(parsedWorkoutFile);
  }

  static assembleZwoFile(zwiftWorkout) {
    return ZwiftWorkoutParser.xmlBuilder.build(zwiftWorkout.contents);
  }
}
