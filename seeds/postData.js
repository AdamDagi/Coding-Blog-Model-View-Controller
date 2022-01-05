const { Postcards } = require('../models');

const postcardData = [
  {
    title: '',
    autor: '',
    exhibition_date: '',
    description: '',
  },
];

const seedPostcards = () => Postcards.bulkCreate(postcardData);

module.exports = seedPostcards;