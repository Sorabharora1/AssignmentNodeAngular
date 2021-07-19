const express = require('express');

const User = require('../controllers/users/UserController');

const router = express.Router();


router.get('/getUser', User.getDetails)
router.post('/addUser', User.createUser)
router.delete('/deleteUser/:id', User.deleteUser)
router.patch('/updateUser', User.updateUser)
router.get('/users', User.usersList)


module.exports = router