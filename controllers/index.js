const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routers.js');
const dashRoutes = require('./dashboard-routers.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashRoutes);

module.exports = router;