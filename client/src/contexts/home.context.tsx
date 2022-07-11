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
  queryValues: string[] | never;
  handleQueryValues: (val: string) => void;
  handleFiltersOn: () => void;
}

const HomeContext = createContext({} as ContextValues);

function HomeProvider({ children }: PropsWithChildren) {
  const [queryValues, setQueryValues] = useState<string[] | never>([]);

  const logData = useQuery(GET_HISTORY, {
    variables: {},
  });

  const handleQueryValues = (val: string) => {
    logData.refetch({ param: val });

    // setQueryValues((prev) =>
    //   prev.indexOf(val) === -1
    //     ? [val, ...prev]
    //     : prev.filter((item) => item !== val)
    // );
  };

  const handleFiltersOn = () => {
    // setQueryValues([]);
    logData.refetch({ param: "none" });
  };

  const values: ContextValues = {
    logData,
    queryValues,
    handleQueryValues,
    handleFiltersOn,
  };

  return <HomeContext.Provider value={values}>{children}</HomeContext.Provider>;
}

function useHomeProvider() {
  return useContext(HomeContext);
}

export { HomeProvider, useHomeProvider };
