const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const serversRouter = require('./servers.js');
const channelsRouter = require('./channels.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/servers', serversRouter);
router.use('/channels', channelsRouter);

module.exports = router;