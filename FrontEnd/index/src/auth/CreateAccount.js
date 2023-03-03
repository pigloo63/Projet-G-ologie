import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const CreateAccount = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([])

  const { register, handleSubmit } = useForm()

  const signupLogger = (data) => {
    console.log(data)

    const mail = data.email
    const username = data.username
    const password = data.password
    const verifyPassWord = data.verifyPassword

    const url = 'http://localhost:4000/api/auth/signup'

    const fetchSignUp = async () => {
      try {
        //Vérification de la bonne validité du mpd
        if (password !== verifyPassWord) {
          console.log('Mot de passe incorrecte')
        } else {
          const result = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              email: mail,
              identifiant: username,
              password: password,
              verifyPassWord: verifyPassWord,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          })

          const dataResult = await result.json()

          if (result.ok) {
            setData(dataResult.result)
          }
        }
      } catch (error) {
        console.log("Pas de réponse de l'API")
      }
    }
    fetchSignUp()
  }

  return (
    <div>
      <section className="parallax-config bg-cover min-h-[95vh] w-[45%]">
        <h2 className="absolute top-[20vh] left-[131vh] text-2xl">
          INSCRIVEZ-VOUS
        </h2>
        <form
          onSubmit={handleSubmit(signupLogger)}
          className="flex flex-col w-1/3 text-center fixed top-1/3 left-[53%]"
        >
          <label htmlFor="mail">Votre email</label>
          <input
            className="border w-[50vh] m-auto mb-5"
            type="text"
            name="email"
            id="email"
            {...register('email', {
              required: 'Email est incorrect',
            })}
          />
          <label htmlFor="username">Votre identifiant</label>
          <input
            className="border w-[50vh] m-auto mb-5"
            type="text"
            name="username"
            id="username"
            {...register('username', {
              required: "L'identifiant est requis",
            })}
          />
          <label htmlFor="password">Votre mot de passe</label>
          <input
            className="border w-[50vh] m-auto mb-5"
            type="password"
            name="password"
            id="password"
            {...register('password', {
              required: 'Adresse identifiant est incorrect',
            })}
          />
          <label htmlFor="verifyPassword">Vérification du mot de passe</label>
          <input
            className="border w-[50vh] m-auto mb-10"
            type="password"
            name="verifyPassword"
            id="verifyPassword"
            {...register('verifyPassword', {
              required: 'Vérification du mot de passe est incorrect',
            })}
          />
          <button
            type={'submit'}
            className="mt-5 hover:font-bold cursor-pointer"
          >
            Créer son compte
          </button>
        </form>
      </section>
      <section className="w-full min-h-[5vh] bg-buffer"></section>
    </div>
  )
}

export default CreateAccount
