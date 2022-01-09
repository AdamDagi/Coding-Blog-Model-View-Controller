const  Users  = require('../models/User');

const UsersData = [
  {
    username: 'test',
    email: 'test@test.com',
    password: 'testik',
  },
];

const seedUsers = () => Users.bulkCreate(UsersData);

module.exports = seedUsers;