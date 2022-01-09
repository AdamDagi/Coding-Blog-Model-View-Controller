const sequelize = require('../config/connection');
const seedPostcards = require('./postData');
const seedComments = require('./commentsData');
const seedUsers = require('./usersData')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPostcards();
  await seedComments();
  await seedUsers();

  process.exit(0);
};

seedAll();