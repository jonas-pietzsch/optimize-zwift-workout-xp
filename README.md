# Optimize Zwift workouts for maximum XP

**Why?** You can gain more XP and therefore level faster on Zwift if workouts are specially arranged.

**What?** Zwift grants more XP for interval blocks than steady state, warmup or cooldown blocks. If you're getting your workouts from trainers via Intervals.icu, TrainingPeaks or creating them on your own, there are probably a lot of steady state, warmup or cooldown blocks used because that's essentially your prescribed training.

**How?** This tool modifies Zwift workout files (.zwo) so that they leverage several [XP hacking approaches](https://zwiftinsider.com/xp-for-cycling-workouts/). It will not change its intensity, duration or resulting workload!

## Web UI

Visit [jonas.verhoelen.de/optimize-zwift-workout-xp/](https://jonas.verhoelen.de/optimize-zwift-workout-xp/) to use this tool through your browser!

## Command line interface

The CLI can optimize single .zwo files. To use it, follow these steps:

1. `nvm use` or make sure that Node 18 is installed incl. yarn
2. `yarn install`
3. `yarn demo` to optimize [sample.zwo](./sample.zwo)
4. `yarn start <path-to-some-workout-file.zwo>` to optimize a custom .zwo file

See the available options using `yarn start --help`

## What's next?

The web UI will be improved with more information and configuration options. CLI and core library may be published via npm.js eventually.
