const express = require('express')
const router = express.Router()

const auth = require('../middelwares/auth')
const multer = require('../middelwares/multer-config')

const mineralController = require('../controllers/mineralFields')

router.post('/', auth, multer, mineralController.createMineral)

router.get('/', mineralController.getAllMineral)

router.get('/family/:OneFamily', mineralController.getFamilyMineral)


module.exports = router

