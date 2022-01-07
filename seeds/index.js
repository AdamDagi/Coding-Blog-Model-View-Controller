const sequelize = require('../config/connection');
const seedPostcards = require('./postData');
const seedComments = require('./commentsData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPostcards();
  await seedComments();

  process.exit(0);
};

seedAll();