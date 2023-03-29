export const defaultOptions = {
  steadyStateBlocks: {
    optimize: true,
    minimumDurationSeconds: 120,
    replacementBlocksDurationSeconds: 120,
  },
  warmupAndCooldownBlocks: {
    optimizeWarmup: true,
    optimizeCooldown: true,
    minimumDurationSeconds: 120,
    replacementBlocksDurationSeconds: 30,
  },
  skipReportOutput: false,
};

export const buildOptions = (customOptions) => {
  return {
    ...defaultOptions,
    ...(customOptions || {}),
    steadyStateBlocks: {
      ...defaultOptions.steadyStateBlocks,
      ...(customOptions || {}).steadyStateBlocks,
    },
    warmupAndCooldownBlocks: {
      ...defaultOptions.warmupAndCooldownBlocks,
      ...(customOptions || {}).warmupAndCooldownBlocks,
    },
  };
};
