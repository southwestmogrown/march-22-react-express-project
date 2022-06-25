const router = require('express').Router();

const { Server, UserServer } = require('../../db/models');

const asyncHandler = require('express-async-handler');
const { ResultWithContext } = require('express-validator/src/chain');


// Get all servers
router.get('/', asyncHandler(async(req, res) => {
    const servers = await Server.findAll();

    res.json(servers)
}));

// Get a single server
router.get('/:serverId', asyncHandler(async(req, res) => {
    const serverId = req.params.serverId;

    const server = await Server.findByPk(serverId);
    res.json(server)
}));



router.get(`/users/:userId`, asyncHandler(async(req, res) => {
    const userId = Number(req.params.userId)
    
    const servers = await Server.findAll({
        where: {
            ownerId: userId
        },
        include: [{
            model: UserServer,
            where: {
                userId
            }
        }]
    });
    res.json(servers)
}));

router.post('/', asyncHandler(async(req, res) => {
    const { name, ownerId, icon } = req.body;

    const newServer = await Server.create({
        name,
        ownerId,
        icon
    });

    res.json(newServer)
}));


module.exports = router;