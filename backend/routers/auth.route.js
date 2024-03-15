const express = require('express');
const UserModel = require('../models/user.model');
const authRoute = express.Router();


authRoute.get('/', (req, res) => {

    UserModel.find();

    res.send('users')
})

module.exports = authRoute;