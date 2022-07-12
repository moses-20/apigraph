import { gql } from "@apollo/client";

export const GET_HISTORY = gql`
  query {
    logs {
      id
      date
      actions {
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

export const GET_FILTERED_HISTORY = gql`
  query getFilteredLogActions($type: String, $status: String) {
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
