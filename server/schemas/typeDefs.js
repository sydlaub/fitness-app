const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    exercises: [Exercise]!
  }

  type Exercise {
    _id: ID
    description: String
    duration: String
    date: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    exercises(username: String): [Exercise]
    exercise(exerciseId: ID!): Exercise
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addExercise(thoughtText: String!): Exercise
    removeExercise(exerciseId: ID!): Exercise
  }
`;

module.exports = typeDefs;
