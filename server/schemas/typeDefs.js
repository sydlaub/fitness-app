const gql = require('graphql-tag');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
