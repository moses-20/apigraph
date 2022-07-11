import { gql } from "@apollo/client";

const GET_HISTORY = gql`
  query getLogsHistory($param: String) {
    logs {
      id
      date
      actions(param: $param) {
        id
        type
        status
        party
        amount
        narrative
      }
    }
  }
`;

export { GET_HISTORY };
