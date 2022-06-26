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

router.get('/servers/:serverId', asyncHandler(async(req, res) => {
    const { serverId } = req.params;

    const channels = await Channel.findAll({
        where: {
            serverId
        }
    });

    res.json(channels)
}));

router.post('/', asyncHandler(async(req, res)  => {
    const { name, serverId } = req.body;

    const channel = await Channel.create({
        name,
        serverId
    });

    res.json(channel);
}));

module.exports = router;