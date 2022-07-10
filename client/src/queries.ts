import { gql } from "@apollo/client";

const GET_HISTORY = gql`
  query getHistory {
    logs {
      id
      date
      actions {
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
