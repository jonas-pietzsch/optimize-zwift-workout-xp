import * as React from "react";
import { defaultOptions } from "../../library/options.js";

const Context = React.createContext(null);
const initialState = {
  ...defaultOptions,
  selectedFiles: [],
  results: [],
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
        saveResults: (results) => setState({ ...state, results }),
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
