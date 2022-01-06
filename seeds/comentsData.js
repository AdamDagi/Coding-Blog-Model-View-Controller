const  Coments  = require('../models/Postcards');

const ComentsData = [
  {
    autor: 'test',
    exhibition_date: '01.01.2022',
    message: 'khjgfdxfjhkgjfdcvjhgfdcvhgjfd',
  },
];

const seedComents = () => Coments.bulkCreate(ComentsData);

module.exports = seedComents;