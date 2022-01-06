const router = require('express').Router();
const { Postcards, Coments } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all Postcards for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostcardsData = await Postcards.findAll({
      include: [
        {
          model: Coments,
          attributes: ['autor', 'exhibition_date', 'message'],
        },
      ],
    });

    const poscard = dbPostcardsData.map((poscards) =>
    poscards.get({ plain: true })
    );

    res.render('Home', {
      poscard,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one postcard
// Use the custom middleware before allowing the user to access the gallery
router.get('/poscards/:id', withAuth, async (req, res) => {
  try {
    const dbPostcardsData = await Postcards.findByPk(req.params.id, {
      include: [
        {
          model: Coments,
          attributes: [
            'autor', 
            'exhibition_date', 
            'message',
          ],
        },
      ],
    });

    const postcards = dbPostcardsData.get({ plain: true });
    res.render('postcards', { postcards, loggedIn: req.session.loggedIn });
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