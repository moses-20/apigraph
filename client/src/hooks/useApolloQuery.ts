import { useQuery } from "@apollo/client";
import { GET_LOG_HISTORY, GET_ACTIONS_BY_SEARCH } from "apollo/queries";
import { useAppContext } from "context/app.context";

/**
 * In a large application, using Apollo Lazy Queries will be ideal
 */

function useApolloQuery() {
  const { searchMode } = useAppContext();
  const history = useQuery(GET_LOG_HISTORY, {
    variables: {},
  });

  const search = useQuery(GET_ACTIONS_BY_SEARCH, {
    variables: {},
  });

  if (searchMode) {
    return search;
  }

  return history;
}

export default useApolloQuery;
