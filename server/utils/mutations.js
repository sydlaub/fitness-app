import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!) {
    addProfile(name: $name) {
      _id
      name
    }
  }
`;

export const ADD_COMPLETEDEXERCISES = gql`
  mutation addCompletedExercises($profileId: ID!, $completedExercises: String!) {
    addCompletedExercises(profileId: $profileId, completedExercises: $completedExercises) {
      _id
      name
      completedExercises
    }
  }
`;
