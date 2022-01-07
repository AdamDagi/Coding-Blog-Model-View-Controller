const router = require('express').Router();
const { Comments } = require('../models');

router.post('/', async (req, res) => {
  try {
    const dbCommentsData = await Comments.create({
      autor: req.body.autor,
      exhibition_date: req.body.exhibition_date,
      message: req.body.message,
      postcard_id: req.body.message,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;