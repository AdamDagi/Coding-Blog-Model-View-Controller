const router = require('express').Router();
const { Postcards, Comments } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');



// GET one postcard
// Use the custom middleware before allowing the user to access the gallery
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const eachComment = await Comments.findAll({
      raw: true,
      where: {
        postcard_id: req.params.id
      }
    });
    const postik = await Postcards.findOne({
      raw: true,
      include: [
        { model: Comments }
      ],
      where: {
        id: req.params.id
      }
    }).then(data => {
      res.render("post", {
        data, 
        comments: eachComment || [],
        loggedIn: req.session.loggedIn
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all Postcards for homepage
router.get('/', async (req, res) => {
  try {
    await Postcards.findAll({
      raw: true
    }).then(news => {
      res.render("main", {
        news,
        loggedIn: req.session.loggedIn,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;