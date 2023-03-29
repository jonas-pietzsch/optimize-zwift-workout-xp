import cloneDeep from "lodash/cloneDeep.js";

export const defaultOptions = {
  steadyStateBlocks: {
    optimize: true,
    minimumDurationSeconds: 120,
  },
  warmupAndCooldownBlocks: {
    optimizeWarmup: true,
    optimizeCooldown: true,
    minimumDurationSeconds: 120,
  },
  intervalsBlocksDurationSeconds: 120,
  skipReportOutput: false,
};

export const buildOptions = (customOptions) =>
  Object.assign(cloneDeep(defaultOptions), customOptions || {});
