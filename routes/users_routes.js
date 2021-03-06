const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users')

router.get('/users', usersController.getAllUsers)
router.get('/users/:id', usersController.getOneUser)
router.get('/users/:id/check-ins', usersController.getUserCheckIns)
router.post('/users', usersController.addUser)
router.patch('/users/:id', usersController.updateUser)
router.delete('/users/:id', usersController.deleteUser)

module.exports = router;
