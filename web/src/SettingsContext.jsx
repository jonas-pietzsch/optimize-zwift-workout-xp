import * as React from "react";

const Context = React.createContext(null);
const initialState = {
  selectedFiles: [],
  steadyStateBlocks: {
    optimize: true,
    minimumDurationMinutes: 2,
  },
  warmupAndCooldownBlocks: {
    optimizeWarmup: true,
    optimizeCooldown: true,
    minimumDurationMinutes: 2,
  },
  intervalsBlocksDurationSeconds: 120,
};

export const SettingsProvider = ({ children }) => {
  const [state, setState] = React.useState(initialState);

  const computed = {
    shouldOptimizeAnyWarmupOrCooldown:
      state.warmupAndCooldownBlocks.optimizeCooldown ||
      state.warmupAndCooldownBlocks.optimizeWarmup,
    shouldOptimizeAnything:
      state.warmupAndCooldownBlocks.optimizeCooldown ||
      state.warmupAndCooldownBlocks.optimizeWarmup ||
      state.steadyStateBlocks.optimize,
  };

  return (
    <Context.Provider
      value={{
        settings: state,
        setSettings: setState,
        computed,
        reset: () => setState(initialState),
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useSettingsContext = () => {
  const context = React.useContext(Context);
  if (!context) throw Error("No context available!");
  return context;
};
