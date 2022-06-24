const router = require('express').Router();

const { Server } = require('../../db/models');

const asyncHandler = require('express-async-handler');

router.get('/', asyncHandler(async(req, res) => {
    const servers = await Server.findAll();

    res.json(servers)
}));    


module.exports = router;