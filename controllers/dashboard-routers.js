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
    res.render("newpost", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:email/:id', withAuth, async (req, res) => {
  try {
    const post = await Postcards.findOne({
      raw: true,
      where: {
        id: req.params.id,
      }
    });
    res.render("updatepost", {
      title: post.title,
      description: post.description,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/:email/:id/update', withAuth, async (req, res) => {
  try {
    const dataUser = await User.findOne ({
      raw: true,
      where: {
        email: req.body.email,
      }
    });
    await Postcards.update(
      {
        title: req.body.title,
        autor: dataUser.username,
        exhibition_date: req.body.exhibition_date,
        description: req.body.description,
      }, 
      {
        where: {
          id: req.params.id,
        },
      }
    )
    res.status(200).json("ok");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:email/:id/delete', withAuth, async (req, res) => {
  try {
    await Postcards.destroy(
      {
        where: {
          id: req.params.id,
        },
      }
    )
    res.status(200).json("ok");
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
    res.status(200).json("ok");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;