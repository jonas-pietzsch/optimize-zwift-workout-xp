#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { cwd } from "node:process";
import * as fs from "fs";
import { ZwiftWorkoutParser } from "../library/ZwiftWorkoutParser.js";

yargs(hideBin(process.argv)).command(
  "$0 [filepath]",
  "Optimize a Zwift workout (.zwo) file for maximum XP",
  (yargs) => {
    yargs
      .positional("filepath", {
        describe: "path of a single .zwo workout file",
      })
      .option("minimumDuration", {
        alias: "m",
        type: "number",
        default: 60,
        description:
          "minimum duration of steady state blocks to consider chopping up",
      })
      .option("copy", {
        alias: "c",
        type: "boolean",
        default: true,
        description:
          "whether to write optimized workout files to another file than the original input file",
      })
      .option("recoveryIntervalDuration", {
        alias: "r",
        type: "number",
        default: 60,
        description:
          "duration of created interval blocks for optimizing warmup and cooldown blocks",
      })
      .option("intervalsDuration", {
        alias: "i",
        type: "string",
        default: 30,
        description:
          "total duration per generated interval block (50% on 50% off)",
      });
  },
  (argv) => {
    const {
      minimumDuration,
      intervalsDuration,
      recoveryIntervalDuration,
      filepath,
    } = argv;
    const options = {
      minimumDuration,
      intervalsDuration,
      recoveryIntervalDuration,
    };

    const absoluteFilepath = [cwd(), filepath].join("/");
    const workoutFileBuffer = fs.readFileSync(absoluteFilepath);
    const workout = ZwiftWorkoutParser.parseZwiftWorkoutFile(workoutFileBuffer);
    workout.optimize(options);

    const targetFilepath = argv.copy
      ? absoluteFilepath.replace(".zwo", "-optimized.zwo")
      : absoluteFilepath;
    fs.writeFileSync(
      targetFilepath,
      ZwiftWorkoutParser.assembleZwiftWorkoutFile(workout)
    );
  }
).argv;
