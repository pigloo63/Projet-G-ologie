const bcrypt = require('bcrypt')
const jxt = require('jsonwebtoken')
const mysqlconnection = require('../DB/mysql')
const { default: UserModel } = require('../models/UserModel')
const User = require('../models/UserModel')

exports.signup = (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const verifyPassWord = req.body.verifyPassWord
      console.log(verifyPassWord)
      const user = new UserModel(req.body.email, hash, req.body.identifiant)
      console.log(user)
      //Vérification de la bonne écriture du mot de passe
      if (req.body.password !== verifyPassWord) {
        res
          .status(403)
          .json({ message: 'La vérification du mot de passe est incorrecte' })
      } else {
        //requête SQL pour envoie des données dans la base de données
        mysqlconnection.query('INSERT INTO user SET ?', user, (err, result) => {
          if (err) {
            res.json({ err })
            console.log({ err })
          } else {
            res.json({ message: 'utilisateur enregistré' })
          }
        })
      }
    })
    .catch((error) => res.status(500).json({ error }))
}

exports.login = (req, res) => {
  const identifiant = req.body.identifiant
  mysqlconnection.query(
    'SELECT * FROM user WHERE identifiant = ?',
    identifiant,
    (err, result) => {
      if (err) {
        res.status(401).json({ message: 'Erreur de la base de donnée' })
        res.json({ err })
      } else {
        //Si l'utilisateur n'est pas présent dans base de donnée
        if (result === 0) {
          res.status(404).json({
            error: `identifiant non valide ou non existant dans la BDD`,
            result,
          })
        } else {
          bcrypt
            .compare(req.body.password, result[0].password)
            .then((valid) => {
              if (!valid) {
                return res.status(401).json({
                  message: 'Paire login/mot de passe incorrecte',
                  valid,
                })
              }
              res.status(200).json({
                userId: result[0].id,
                userAdmin: result[0].privilege,
                token: jxt.sign(
                  { userId: result[0].id, userAdmin: result[0].privilege },
                  'RANDOM_TOKEN_SECRET',
                  {
                    expiresIn: '24h',
                  }
                ),
                message: 'utilisateur connecté',
              })
            })
            .catch((error) => res.status(500).json({ error }))
        }
      }
    }
  )
}

exports.findUser = (req, res) => {}
