const express = require('express');
const router = express.Router();
const checkInsController = require('../controllers/check_ins')

router.get('/check-ins', checkInsController.getAllCheckIns)
router.get('/check-ins/:id', checkInsController.getOneCheckIn)
router.get('/check-ins/user/:id', checkInsController.getCheckInsOneUser)
router.post('/check-ins', checkInsController.addCheckIn)
router.patch('/check-ins/:id', checkInsController.updateCheckIn)
router.delete('/check-ins/:id', checkInsController.deleteCheckIn)


module.exports = router;
