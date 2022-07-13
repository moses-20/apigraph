import { gql } from "@apollo/client";

export const GET_LOG_HISTORY = gql`
  query history($type: String, $status: String) {
    logActionType @client @export(as: "type")
    logActionStatus @client @export(as: "status")
    logs {
      id
      date
      actions(type: $type, status: $status) {
        id
        ref
        trxn
        type
        status
        party
        amount
        narrative
      }
    }
  }
`;

export const GET_ACTIONS_BY_SEARCH = gql`
  query ($query: String) {
    searchQuery @client @export(as: "query")
    actionsBySearch(query: $query) {
      id
      ref
      trxn
      type
      status
      party
      amount
      narrative
    }
  }
`;
