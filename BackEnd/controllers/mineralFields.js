const res = require('express/lib/response')
const mysqlconnection = require('../DB/mysql')
const { default: mineralFieldModel } = require('../models/mineralFieldModel')

exports.createMineral = (req, res) => {
  const image = `${req.protocol}://${req.get('host')}/images/${
    req.file.filename
  }`

  const mineralSave = new mineralFieldModel(
    req.body.family,
    req.body.name,
    req.body.description,
    req.body.chimicalFormula,
    req.body.crystalMesh,
    req.body.durete,
    req.body.color,
    req.body.eclat,
    req.body.opacity,
    req.body.density,
    req.body.habitus,
    image
  )

  mysqlconnection.query(
    `INSERT INTO mineralproperty SET ?`,
    mineralSave,
    (err, result) => {
      if (err) {
        console.log('Erreur de la base de données')
        res.json(err)
      } else {
        res.json({ message: 'Mineral enregistré' })
      }
    }
  )
}

exports.getAllMineral = (req, res) => {
  mysqlconnection.query(
    'SELECT * FROM mineralproperty WHERE ?',
    ['1'],
    (err, result) => {
      if (err) {
        res.json({ err })
      } else {
        res.status(200).json({ result })
      }
    }
  )
}

exports.getFamilyMineral = (req, res) => {
  mysqlconnection.query(
    `SELECT * FROM mineralproperty WHERE family = "${req.params.OneFamily}"`,
    (err, result) => {
      if (err) {
        res.json({ err: '' })
      } else {
        res.status(200).json({ result })
      }
    }
  )
}

exports.findNameOfMineralsInFamily = (req, res) => {
  // if(req.params.FamilyMineral)
  mysqlconnection.query(
    `SELECT * FROM mineralproperty WHERE family = "${req.params.FamilyMineral}" GROUP BY name`,
    (err, result) => {
      if (err) {
        res.json({ err: 'minéraux non trouvé' })
      } else {
        res.status(200).json({ result })
      }
    }
  )
}

exports.findOneMineral = (req, res) => {
  mysqlconnection.query(
    `SELECT * FROM mineralproperty WHERE name = "${req.params.NameOfMineral}"`,
    (err, result) => {
      if (err) {
        res.json({ err: 'mineral non trouvé' })
      } else {
        res.status(200).json({ result })
      }
    }
  )
}

exports.getOneMineralInFamily = (req, res) => {
  mysqlconnection.query(
    `SELECT * FROM mineralproperty WHERE family = "${req.params.OneFamily}" AND name = "${req.params.mineral}"`,
    (err, result) => {
      if (err) {
        res.json({ err: 'mineral non trouvé' })
      } else {
        res.status(200).json({ result })
      }
    }
  )
}
