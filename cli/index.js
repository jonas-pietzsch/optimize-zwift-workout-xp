#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { cwd } from "node:process";
import * as fs from "fs";
import { ZwiftWorkoutParser } from "../library/ZwiftWorkoutParser.js";
import { ZwiftWorkoutOptimizer } from "../library/ZwiftWorkoutOptimizer.js";

yargs(hideBin(process.argv)).command(
  "$0 [filepath]",
  "Optimize a Zwift workout (.zwo) file for maximum XP",
  (yargs) => {
    yargs
      .positional("filepath", {
        describe: "path of a single .zwo workout file",
      })
      .option("minimumSteadyStateBlockDurationSeconds", {
        type: "number",
        default: 120,
        description:
          "Min. duration before steady state blocks are optimized (seconds)",
      })
      .option("minimumWarmupOrCooldownDurationSeconds", {
        type: "number",
        default: 120,
        description:
          "Min. duration before warmup/cooldown blocks are optimized (seconds)",
      })
      .option("copy", {
        alias: "c",
        type: "boolean",
        default: true,
        description:
          "whether to write optimized workout files to another file than the original input file",
      })
      .option("intervalsDuration", {
        type: "string",
        default: 120,
        description: "Desired total intervals block duration (seconds)",
      });
  },
  (argv) => {
    const {
      minimumSteadyStateBlockDurationSeconds,
      minimumWarmupOrCooldownDurationSeconds,
      intervalsDuration,
      filepath,
    } = argv;

    const absoluteFilepath = [cwd(), filepath].join("/");
    const workoutFileBuffer = fs.readFileSync(absoluteFilepath);
    const workout = ZwiftWorkoutParser.parseZwoFile(workoutFileBuffer);

    const options = {
      minimumSteadyStateBlockDurationSeconds,
      minimumWarmupOrCooldownDurationSeconds,
      intervalsDuration,
    };
    const { optimizedWorkout } = ZwiftWorkoutOptimizer.optimize(
      workout,
      options
    );

    const targetFilepath = argv.copy
      ? absoluteFilepath.replace(".zwo", "-optimized.zwo")
      : absoluteFilepath;
    fs.writeFileSync(
      targetFilepath,
      ZwiftWorkoutParser.assembleZwoFile(optimizedWorkout)
    );
  }
).argv;
