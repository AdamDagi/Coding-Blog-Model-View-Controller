const router = require('express').Router();
const { Postcards } = require('../models');

// GET Dashboard
router.get('/', async (req, res) => {
  try {
    res.render("dashboard", {
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const dbPostcardData = await Postcards.create({
      title: req.body.title,
      autor: req.body.autor,
      exhibition_date: req.body.exhibition_date,
      description: req.body.description,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;