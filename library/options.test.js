import { buildOptions, defaultOptions } from "./options.js";

describe("options", () => {
  describe("buildOptions", () => {
    it("should merge no custom options with default options and keep all defaults", () => {
      expect(buildOptions({})).toEqual(defaultOptions);
    });

    it("should merge undefined custom options with default options and keep all defaults", () => {
      expect(buildOptions(undefined)).toEqual(defaultOptions);
    });

    it("should merge a few custom options with default options", () => {
      const customOptions = {
        intervalsBlocksDurationSeconds: 1,
        warmupAndCooldownBlocks: { optimizeWarmup: false },
      };

      const result = buildOptions(customOptions);

      expect(result).toEqual({
        intervalsBlocksDurationSeconds: 1,
        skipReportOutput: false,
        steadyStateBlocks: {
          minimumDurationSeconds: 120,
          optimize: true,
        },
        warmupAndCooldownBlocks: {
          optimizeWarmup: false,
        },
      });
    });
  });
});
