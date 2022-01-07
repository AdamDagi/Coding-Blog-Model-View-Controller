const router = require('express').Router();
const { Postcards, Comments } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');



// GET one postcard
// Use the custom middleware before allowing the user to access the gallery
// router.get('/:id', async (req, res) => {
//   try {
//     Postcards.findOne({
//       include: [
//         { model: Comments }
//       ],
//       where: {
//         id: req.params.id
//       }
//     }).then(data => {
//       res.json(data);
//       // res.render("post", {
//       //   data
//       // });
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// GET all Postcards for homepage
router.get('/', async (req, res) => {
  try {
    Postcards.findAll({
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

module.exports = router;