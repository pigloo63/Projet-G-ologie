const bcrypt = require('bcrypt')
const jxt = require('jsonwebtoken')
const mysqlconnection = require('../DB/mysql')
const { default: UserModel } = require('../models/UserModel')
const User = require('../models/UserModel')

exports.signup = (req, res) => {
	bcrypt
		.hash(req.body.password, 10)
		.then((hash) => {
            const user = new UserModel(req.body.email, hash, req.body.identifiant)
            //requête SQL pour envoie des données dans la base de données
            mysqlconnection.query(
                'INSERT INTO user SET ?', user, (err, result) => {
                    if(err){
                        console.log(`Erreur de la connexion à la base de données`)
                        res.json({error})
                    }else{
                        res.json({message:'utilisateur enregistré'})
                    }
                }
            )
		})
		.catch((error) => res.status(500).json({ error }))
}

exports.login = (req, res) => {
    const identifiant = req.body.identifiant
        mysqlconnection.query(
            'SELECT * FROM user WHERE identifiant = ?', identifiant, (err, result) => {
                if(err){
                    res.status(401).json({message : 'Erreur de la base de donnée' })
                }else{
                    if(result == 0){
                        res.status(404).json({message:`identifiant non valide`})
                    }else{
                        console.log(result)
                        bcrypt
                            .compare(req.body.password, result[0].password)
                            .then((valid) => {
                                if (!valid) {
                                    return res.status(401).json({
                                        message: 'Paire login/mot de passe incorrecte',
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
