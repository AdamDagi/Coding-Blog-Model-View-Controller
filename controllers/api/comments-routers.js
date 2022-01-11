const router = require('express').Router();
const { Comments } = require('../../models');
const { User } =require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    const dbCommentsData = await Comments.create({
      autor: userData.username,
      exhibition_date: req.body.exhibition_date,
      message: req.body.message,
      postcard_id: req.body.postcard_id,
    });
    res.status(200).json("ok");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;