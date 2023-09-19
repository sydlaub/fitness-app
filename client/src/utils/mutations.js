import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      email
    }
  }
}
`;

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      email
      password
    }
  }
}
`;

export const ADD_GOAL = gql`
mutation AddGoal($goalText: String!) {
  addGoal(goalText: $goalText) {
    goalText
    _id
    date
  }
}
`;