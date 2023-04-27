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

  get description() {
    return this.contents[0].workout_file.find((entry) => entry.description)
      .description[0]["#text"];
  }

  set description(val) {
    this.contents[0].workout_file.find(
      (entry) => entry.description
    ).description[0]["#text"] = val;
  }

  get tags() {
    return this.contents[0].workout_file.find((entry) => entry.tags).tags;
  }

  addTag(text) {
    this.contents[0].workout_file
      .find((entry) => entry.tags)
      .tags.push({
        tag: [],
        ":@": {
          attributename: text,
        },
      });
  }
}
