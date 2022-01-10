const router = require('express').Router();
const { Postcards, User } = require('../models');
const withAuth = require('../utils/auth');

// GET Dashboard
router.get('/:email', withAuth, async (req, res) => {
  try {
    const dataUser = await User.findOne ({
      raw: true,
      where: {
        email: req.params.email,
      }
    });
    const posts = await Postcards.findAll({
      raw: true,
      where: {
        autor: dataUser.username,
      }
    });
    res.render("dashboard", {
      myPosts: posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:email/newpost', withAuth, async (req, res) => {
  try {
    res.render("newpost");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const dataUser = await User.findOne ({
      raw: true,
      where: {
        email: req.body.email,
      }
    });
    const dbPostcardData = await Postcards.create({
      title: req.body.title,
      autor: dataUser.username,
      exhibition_date: req.body.exhibition_date,
      description: req.body.description,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;