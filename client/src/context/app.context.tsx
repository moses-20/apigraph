import { createContext, useState, PropsWithChildren, useContext } from "react";

interface ContextValues {
  searchMode: boolean;
  toggleSearchMode: (val: boolean) => void;
}

const AppContext = createContext({} as ContextValues);

function AppProvider({ children }: PropsWithChildren) {
  const [searchMode, setSearchMode] = useState<boolean>(false);

  const toggleSearchMode = (val: boolean) => setSearchMode(val);

  const value = {
    searchMode,
    toggleSearchMode,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useAppContext() {
  return useContext(AppContext);
}

export { AppProvider, useAppContext };
