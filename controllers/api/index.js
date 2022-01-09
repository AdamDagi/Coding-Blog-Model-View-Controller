const router = require('express').Router();

const userRoutes = require('./user-routes');
const comentsRoutes = require('./comments-routers');

router.use('/users', userRoutes);
router.use('/publiccomment', comentsRoutes);

module.exports = router;