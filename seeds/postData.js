const  Postcards  = require('../models/Postcards');

const postcardData = [
  {
    title: 'test',
    autor: 'test',
    exhibition_date: '01.01.2022',
    description: 'khjgfdxfjhkgjfdcvjhgfdcvhgjfd',
  },
];

const seedPostcards = () => Postcards.bulkCreate(postcardData);

module.exports = seedPostcards;