import { buildOptions, defaultOptions } from "./options.js";

describe("options", () => {
  describe("buildOptions", () => {
    it("should merge no custom options with default options and keep all defaults", () => {
      expect(buildOptions({})).toEqual(defaultOptions);
    });

    it("should merge undefined custom options with default options and keep all defaults", () => {
      expect(buildOptions(undefined)).toEqual(defaultOptions);
      expect(buildOptions()).toEqual(defaultOptions);
      expect(buildOptions(null)).toEqual(defaultOptions);
    });

    it("should merge a few custom options with default options", () => {
      const customOptions = {
        warmupAndCooldownBlocks: { optimizeWarmup: false },
        steadyStateBlocks: {
          optimize: false,
        },
      };

      const result = buildOptions(customOptions);

      expect(result).toEqual({
        steadyStateBlocks: {
          optimize: false,
          minimumDurationSeconds: 120,
          replacementBlocksDurationSeconds: 120,
        },
        warmupAndCooldownBlocks: {
          optimizeWarmup: false,
          optimizeCooldown: true,
          minimumDurationSeconds: 120,
          replacementBlocksDurationSeconds: 30,
        },
        skipReportOutput: false,
      });
    });
  });
});
