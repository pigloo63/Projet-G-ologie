import React, { useRef, useState } from 'react'

const CreateAccount = () => {
  const mailInputRef = useRef()
  const identifiantInputRef = useRef()
  const pwdInputref = useRef()
  const verifyPwdRef = useRef()

  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([])

  const signupLogger = (e) => {
    e.preventDefault()

    const enterredMail = mailInputRef.current.value
    const enteredIdentifiant = identifiantInputRef.current.value
    const enterredPwd = pwdInputref.current.value
    const enterredPwDVerify = verifyPwdRef.current.value

    const url = 'http://localhost:4000/api/auth/signup'

    const fetchSignUp = async () => {
      try {
        //Vérification de la bonne validité du mpd
        if (enterredPwd !== enterredPwDVerify) {
          console.log('Mot de passe incorrecte')
          return
        } else {
          const result = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              email: enterredMail,
              identifiant: enteredIdentifiant,
              password: enterredPwd,
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
      <section>
        <form
          onSubmit={signupLogger}
          className="flex flex-col w-1/2 m-auto text-center"
        >
          <label htmlFor="mail">Votre email</label>
          <input
            type="text"
            name="mail"
            id="mail"
            ref={mailInputRef}
            required
          />
          <label htmlFor="identifiant">Votre identifiant</label>
          <input
            type="text"
            name="identifiant"
            id="identifiant"
            ref={identifiantInputRef}
            required
          />
          <label htmlFor="password">Votre mot de passe</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={pwdInputref}
            required
          />
          <label htmlFor="verifyPassword">Vérification du mot de passe</label>
          <input
            type="password"
            name="verifyPassword"
            id="verifyPassword"
            ref={verifyPwdRef}
            required
          />
          <button
            type={'submit'}
            className="mt-5 hover:font-bold cursor-pointer"
          >
            Créer son compte
          </button>
        </form>
      </section>
    </div>
  )
}

export default CreateAccount
