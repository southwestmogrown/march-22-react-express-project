const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { User, Channel } = require('../../db/models');

router.get('/', asyncHandler(async(req, res) => {
    const channels = await Channel.findAll();

        res.json(channels);
}));

router.get('/:channelId', asyncHandler(async(req, res) => {
    const { channelId } = req.params;
    const channel = await Channel.findByPk(channelId);

    res.json(channel)
}));

module.exports = router;