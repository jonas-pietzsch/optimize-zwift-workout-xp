import * as React from "react";

const Context = React.createContext(null);
const initialState = {
  selectedFiles: [],
  steadyStateBlocks: {
    active: true,
    minimumDurationInMinutes: 2,
  },
  warmupAndCooldownBlocks: {
    warmupActive: true,
    cooldownActive: true,
    minimumDurationInMinutes: 2,
  },
  intervalsBlockDurationInSeconds: 180,
};

export const SettingsProvider = ({ children }) => {
  const [state, setState] = React.useState(initialState);

  const computed = {
    shouldOptimizeAnyWarmupOrCooldown:
      state.warmupAndCooldownBlocks.cooldownActive ||
      state.warmupAndCooldownBlocks.warmupActive,
    shouldOptimizeAnything:
      state.warmupAndCooldownBlocks.cooldownActive ||
      state.warmupAndCooldownBlocks.warmupActive ||
      state.steadyStateBlocks.active,
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
