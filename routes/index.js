const express = require('express');
const router = express.Router();
const models = require('../models');
const wikiRouter = require('./wiki.js');
const userRouter = require('./user.js');

router.use('/wiki', wikiRouter);
router.use('/user', userRouter);

module.exports = router;
