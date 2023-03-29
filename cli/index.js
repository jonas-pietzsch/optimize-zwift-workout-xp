#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { cwd } from "node:process";
import * as fs from "fs";
import { ZwiftWorkoutParser } from "../library/ZwiftWorkoutParser.js";
import { ZwiftWorkoutOptimizer } from "../library/ZwiftWorkoutOptimizer.js";
import { defaultOptions } from "../library/options.js";

yargs(hideBin(process.argv)).command(
  "$0 [filepath]",
  "Optimize a Zwift workout (.zwo) file for maximum XP",
  (yargs) => {
    yargs
      .positional("filepath", {
        describe: "path of a single .zwo workout file",
      })
      .option("optimizeSteadyStateBlocks", {
        type: "boolean",
        default: defaultOptions.steadyStateBlocks.optimize,
        description:
          "Whether to optimize steady state blocks (replace them with intervals blocks)",
      })
      .option("minimumSteadyStateBlockDuration", {
        type: "number",
        default: defaultOptions.steadyStateBlocks.minimumDurationSeconds,
        description:
          "Min. duration before steady state blocks are optimized (seconds)",
      })
      .option("optimizeWarmupBlocks", {
        type: "boolean",
        default: defaultOptions.warmupAndCooldownBlocks.optimizeWarmup,
        description:
          "Whether to optimize warmup blocks (replace them with intervals blocks)",
      })
      .option("optimizeCooldownBlocks", {
        type: "boolean",
        default: defaultOptions.warmupAndCooldownBlocks.optimizeCooldown,
        description:
          "Whether to optimize cooldown blocks (replace them with intervals blocks)",
      })
      .option("minimumWarmupOrCooldownDuration", {
        type: "number",
        default: defaultOptions.warmupAndCooldownBlocks.minimumDurationSeconds,
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
      .option("steadyStateReplacementBlockDuration", {
        type: "string",
        default:
          defaultOptions.steadyStateBlocks.replacementBlocksDurationSeconds,
        description:
          "Desired steady state replacement intervals block duration (seconds)",
      })
      .option("warmupOrCooldownReplacementBlockDuration", {
        type: "string",
        default:
          defaultOptions.warmupAndCooldownBlocks
            .replacementBlocksDurationSeconds,
        description:
          "Desired warmup/cooldown replacement intervals block duration (seconds)",
      });
  },
  (argv) => {
    const {
      optimizeSteadyStateBlocks,
      minimumSteadyStateBlockDuration,
      steadyStateReplacementBlockDuration,

      optimizeWarmupBlocks,
      optimizeCooldownBlocks,
      minimumWarmupOrCooldownDuration,
      warmupOrCooldownReplacementBlockDuration,

      filepath,
    } = argv;

    const absoluteFilepath = [cwd(), filepath].join("/");
    const workoutFileBuffer = fs.readFileSync(absoluteFilepath);
    const workout = ZwiftWorkoutParser.parseZwoFile(workoutFileBuffer);

    const options = {
      steadyStateBlocks: {
        optimize: optimizeSteadyStateBlocks,
        minimumDurationSeconds: minimumSteadyStateBlockDuration,
        replacementBlocksDurationSeconds: steadyStateReplacementBlockDuration,
      },
      warmupAndCooldownBlocks: {
        optimizeWarmup: optimizeWarmupBlocks,
        optimizeCooldown: optimizeCooldownBlocks,
        minimumDurationSeconds: minimumWarmupOrCooldownDuration,
        replacementBlocksDurationSeconds:
          warmupOrCooldownReplacementBlockDuration,
      },
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
