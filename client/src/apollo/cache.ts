import { InMemoryCache } from "@apollo/client";
import {
  logActionStatusVar,
  logActionTypeVar,
  searchQueryVar,
} from "./variables";

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        logActionType: {
          read() {
            return logActionTypeVar();
          },
        },
        logActionStatus: {
          read() {
            return logActionStatusVar();
          },
        },
        searchQuery: {
          read() {
            return searchQueryVar();
          },
        },
      },
    },
  },
});
