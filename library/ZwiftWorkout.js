export class ZwiftWorkout {
  constructor(contents) {
    this.contents = contents;
  }

  get trainingBlocks() {
    return this.contents[0].workout_file.find((entry) => entry.workout).workout;
  }

  set trainingBlocks(val) {
    this.contents[0].workout_file.find((entry) => entry.workout).workout = val;
  }

  get name() {
    return this.contents[0].workout_file.find((entry) => entry.name).name[0][
      "#text"
    ];
  }

  set name(val) {
    this.contents[0].workout_file.find((entry) => entry.name).name[0]["#text"] =
      val;
  }
}
