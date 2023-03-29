import { ZwiftWorkoutOptimizer } from "./ZwiftWorkoutOptimizer.js";

export class ZwiftWorkout {
  constructor(contents) {
    this.contents = contents;
  }

  optimize(options) {
    return ZwiftWorkoutOptimizer.optimize(this, options);
  }
}
