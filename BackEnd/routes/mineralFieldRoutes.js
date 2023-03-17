const express = require('express')
const router = express.Router()

const auth = require('../middelwares/auth')
const multer = require('../middelwares/multer-config')

const mineralController = require('../controllers/mineralFields')

router.post('/', auth, multer, mineralController.createMineral)

router.get('/', mineralController.getAllMineral)

router.get('/:OneFamily', mineralController.getFamilyMineral)

router.get('/find/:NameOfMineral', mineralController.findOneMineral)

router.get('/find/name/:FamilyMineral', mineralController.findNameOfMineralsInFamily)

 router.get('/:OneFamily/:mineral', mineralController.getOneMineralInFamily)

module.exports = router
