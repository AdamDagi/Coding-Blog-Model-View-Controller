const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routers.js');
const dashRoutes = require('./dashboard-routers.js');

router.use('/api', apiRoutes);
router.use('/dashboard', dashRoutes);
router.use('/', homeRoutes);

module.exports = router;