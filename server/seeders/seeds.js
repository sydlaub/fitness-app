const db = require('../config/connection');
const { User, Exercise, Goals } = require('../models');
const userSeeds = require('./userSeeds.json');
const exerciseSeeds = require('./exerciseSeeds.json');
const goalSeeds = require('./goalSeeds.json')
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Exercise', 'newExercise');
    await cleanDB('User', 'users');
    await cleanDB('Goals', 'newGoals');

    await User.create(userSeeds);
    await Exercise.create(exerciseSeeds);
    await Goals.create(goalSeeds);

    console.log("DONE!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});