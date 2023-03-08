/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'
import AuthContext from '../context/authContext'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const AuthForm = () => {
  const { register, handleSubmit} = useForm()
  
  const authContext = useContext(AuthContext)

  const history = useHistory()

  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState()
  const [error, setError] = useState(false)

  //Fonction et useState permettant d'afficher lors d'une erreur de mot de passe la modale
  // eslint-disable-next-line no-unused-vars
  const [close, setClose] = useState(true)

  //Fonction pour envoyer les éléments au back
  const onSubmit = (data, e) => {
    e.preventDefault()

    const username = data.username
    const password = data.password

    const url = 'http://localhost:4000/api/auth/login'
    const fetchlog = async () => {
      try {
        const result = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            identifiant: username,
            password: password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        const dataResult = await result.json()
        console.log(dataResult)
        //Si erreur du mot de passe alors affichage de la modale
        if (dataResult.valid === false) {
          setError(true)
        } else {
          setData(dataResult.result)
          setClose(false)
          history.push('/')
          authContext.login(dataResult.token, dataResult.userId)
        }
      } catch (error) {
        console.log("Pas de réponse de l'API")
      }
    }
    fetchlog()
  }

  return (
    <div>
      <section className="parallax-config h-[95vh] bg-cover w-[45%]">
        {close && (
          <div className="m-auto fixed top-1/3 left-[60%] w-[25%]">
            <h2 className="text-center text-2xl mt-[-10vh]">CONNECTEZ-VOUS</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col mt-[10vh] text-center"
            >
              <label htmlFor="username" className="mb-5">
                Votre identifiant
              </label>
              <input
                className="mb-10 border"
                type="text"
                name="username"
                id="username"
                {...register('username', {
                  required: 'Adresse identifiant est incorrect',
                })}
              />
              <label htmlFor="password" className="mb-5">
                Mot de passe
              </label>
              <input
                className="mb-10 border"
                type="password"
                name="password"
                id="password"
                {...register('password', {
                  required: 'Mot de passe incorrect',
                })}
              />
              {
                <div className="mb-5">
                  <p>Le mot de passe et/ou l'identifiant sont incorecte</p>
                </div>
              }
              {<button type={'submit'}>Se connecter</button>}
            </form>
            <div className="mt-10 flex">
              <p className="mr-2">Nouvelle utilisateur ? </p>
              <Link to="/createAccount" className="hover:font-bold">
                Je crée mon compte
              </Link>
            </div>
          </div>
        )}
      </section>
      <section className="w-full h-[5vh] bg-buffer"></section>
    </div>
  )
}

export default AuthForm
