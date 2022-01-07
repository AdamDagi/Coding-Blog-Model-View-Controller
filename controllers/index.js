const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routers.js');
const dashRoutes = require('./dashboard-routers.js');
const comentsRoutes = require('./comments-routers.js');

router.use('/api', apiRoutes);
router.use('/dashboard', dashRoutes);
//router.use('/publiccomment', comentsRoutes);
router.use('/', homeRoutes);

module.exports = router;