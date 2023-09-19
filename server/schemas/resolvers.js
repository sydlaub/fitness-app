const { User, Exercise, Goal } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('exercises');
    },
    user: async (parent, { username }) => {
      return
    },

    goals: async () => {
      return Goal.find();
    },

    goal: async (parent, { goalId }) => {
      return Goal.findOne({ _id: goalId });
    }
  },


  Mutation: {
    addUser: async (parent, { email, password }) => {
      const user = await User.create({ email, password });
      const token = signToken(user);
      return { token, user };
    },

    addGoal: async (parent, { goalText }, context) => {
      if (context.user) {
        const goal = Goal.create({ goalText })
        await User.findOneAndUpdate({ _id: context.user._id }, {$addToSet: { goals: goal._id } })
      }
    },

    removeGoal: async (parent, { goalId }) => {
      return Goal.findOneAndDelete({ _id: goalId })
    },

    updateGoal: async (parent, { goalId }) => {
      return Goal.findOneAndUpdate({ _id: goalId })
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      console.log('test123')
      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
}

module.exports = resolvers;
