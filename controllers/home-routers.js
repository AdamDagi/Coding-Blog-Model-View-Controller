const router = require('express').Router();
const { Postcards, Comments } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');



// GET one postcard
// Use the custom middleware before allowing the user to access the gallery
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    await Postcards.findOne({
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
        commentAutor: data ["Comments.autor"],
        commentExDate: data ["Comments.exhibition_date"],
        commentMessage: data ["Comments.message"],
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
        news
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