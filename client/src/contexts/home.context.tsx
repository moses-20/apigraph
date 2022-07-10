import { useState, createContext, PropsWithChildren, useContext } from "react";

interface ContextValues {
  queryValues: string[] | never;
  handleQueryValues: (val: string) => void;
}

const HomeContext = createContext({} as ContextValues);

function HomeProvider({ children }: PropsWithChildren) {
  const [queryValues, setQueryValues] = useState<string[] | never>([]);

  const handleQueryValues = (val: string) => {
    setQueryValues((prev) =>
      prev.indexOf(val) === -1
        ? [val, ...prev]
        : prev.filter((item) => item !== val)
    );
  };

  const values: ContextValues = {
    queryValues,
    handleQueryValues,
  };

  return <HomeContext.Provider value={values}>{children}</HomeContext.Provider>;
}

function useHomeProvider() {
  return useContext(HomeContext);
}

export { HomeProvider, useHomeProvider };
