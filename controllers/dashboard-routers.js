const router = require('express').Router();
const { Postcards } = require('../models');
const withAuth = require('../utils/auth');

// GET Dashboard
router.get('/', withAuth, async (req, res) => {
  try {
    res.render("dashboard", {
      loggedIn: req.session.loggedIn
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