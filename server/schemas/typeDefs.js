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

  type Goal {
    _id: ID
    goalText: String
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
    goals: [Goal]!
    goal(goalId: ID!): Goal 
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addExercise(thoughtText: String!): Exercise
    removeExercise(exerciseId: ID!): Exercise
    addGoal(goalText: String!): Goal
    removeGoal(goalId: ID!): Goal
    updateGoal(goalId: ID!): Goal
  }
`;

module.exports = typeDefs;
