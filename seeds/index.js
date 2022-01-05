const sequelize = require('../config/connection');
const seedPostcards = require('./postData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPostcards();

  process.exit(0);
};

seedAll();