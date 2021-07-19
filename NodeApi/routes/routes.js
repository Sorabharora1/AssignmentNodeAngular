const express = require('express');

const User = require('../controllers/users/UserController');

const router = express.Router();


router.get('/users', User.getDetails)
router.post('/users', User.createUser)
router.delete('/users/:id', User.deleteUser)
router.patch('/users', User.updateUser)
router.get('/usersList', User.usersList)


module.exports = router