import { useState, createContext, PropsWithChildren, useContext } from "react";
import { ApolloError, ApolloQueryResult, useQuery } from "@apollo/client";
import { GET_HISTORY } from "queries";

interface ContextValues {
  logData: {
    data: any;
    loading: boolean;
    refetch: (
      variables?: Partial<{}> | undefined
    ) => Promise<ApolloQueryResult<any>>;
    error?: ApolloError | undefined;
  };
  filterString: string | null;
  handleFilters: (val?: string) => void;
}

const HomeContext = createContext({} as ContextValues);

function HomeProvider({ children }: PropsWithChildren) {
  const [filterString, setFilterString] = useState<string | null>(null);

  const logData = useQuery(GET_HISTORY, {
    variables: {},
  });

  const handleFilters = (val?: string) => {
    if (val) {
      logData.refetch({ param: val });
      setFilterString(val);
      return;
    }

    logData.refetch({ param: "none" });
    setFilterString(null);
  };

  const values: ContextValues = {
    logData,
    filterString,
    handleFilters,
  };

  return <HomeContext.Provider value={values}>{children}</HomeContext.Provider>;
}

function useHomeProvider() {
  return useContext(HomeContext);
}

export { HomeProvider, useHomeProvider };
