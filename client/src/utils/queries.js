import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      exercises {
        _id
        title
        description
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      exercises {
        _id
        title
        description
        createdAt
      }
    }
  }
`;

export const QUERY_GOAL = gql`
query goal {
  goals {
    _id
    goalText
    date
  }
}`