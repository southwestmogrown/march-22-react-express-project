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



router.get(`/user/:userId`, asyncHandler(async(req, res) => {
    const userId = Number(req.params.userId)
    
    const servers = await Server.findAll({
        where: {
            ownerId: userId
        },
        include: [{
            model: UserServer,
            as: 'userservers',
            where: {
                userId
            }
        }]
    });
    res.json(servers);
}));

router.post('/', asyncHandler(async(req, res) => {
    const { name, ownerId, icon } = req.body;

    const newServer = await Server.create({
        name,
        ownerId,
        icon
    });

    const newUserServer = await UserServer.create({
        serverId: newServer.id,
        userId: ownerId
    });

    res.json({newServer, newUserServer})
}));

router.put('/:serverId', asyncHandler(async(req, res) => {
    const serverId = req.params.serverId;
    const { name, ownerId, icon } = req.body;

    const updatedServer = await Server.findOne({
        where: {
            id: serverId
        },
        include: [{
            model: UserServer, 
            as: 'userservers',
            attributes: ['userId'],
            where: {
                serverId,
            },
            
        }]
    });

    updatedServer.name = name;
    updatedServer.ownerId = ownerId;
    updatedServer.icon = icon;
    updatedServer.userservers[0].userId = ownerId;
 

    res.json({ updatedServer });
}));

router.delete('/:serverId', asyncHandler(async(req, res) => {
    const deletedServerId = req.params.serverId;
    await Server.destroy({
        where: {
            id: deletedServerId
        }
    });

    res.json({ deletedServerId })
}));


module.exports = router;