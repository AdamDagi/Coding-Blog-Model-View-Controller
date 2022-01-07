const  Comments  = require('../models/Comments');

const CommentsData = [
  {
    autor: 'test',
    exhibition_date: new Date(),
    message: 'testiktestik',
    postcard_id: '1'
  },
];

const seedComments = () => Comments.bulkCreate(CommentsData);

module.exports = seedComments;