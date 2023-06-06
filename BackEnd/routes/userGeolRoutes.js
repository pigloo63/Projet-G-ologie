const express = require('express')
const router = express.Router()

const userCtrl = require('../controllers/userGeol')
const privileges = require('../middelwares/privileges')

router.post('/signup', userCtrl.signup)
router.post('/login', userCtrl.login)
router.put('/changeCharacter', userCtrl.changeUserCharacter)

module.exports = router
