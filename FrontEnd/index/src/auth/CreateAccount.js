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
      <section className='parallax-config bg-cover min-h-[95vh] w-[45%]'>
        <p className='absolute top-[20vh] left-[131vh] text-2xl'>INSCRIVEZ-VOUS</p>
        <form
          onSubmit={signupLogger}
          className="flex flex-col w-1/2 text-center fixed top-1/3 left-[45%]"
        >
          <label htmlFor="mail">Votre email</label>
          <input
            className='border w-[50vh] m-auto mb-5'
            type="text"
            name="mail"
            id="mail"
            ref={mailInputRef}
            required
          />
          <label htmlFor="identifiant">Votre identifiant</label>
          <input
            className='border w-[50vh] m-auto mb-5'
            type="text"
            name="identifiant"
            id="identifiant"
            ref={identifiantInputRef}
            required
          />
          <label htmlFor="password">Votre mot de passe</label>
          <input
            className='border w-[50vh] m-auto mb-5'
            type="password"
            name="password"
            id="password"
            ref={pwdInputref}
            required
          />
          <label htmlFor="verifyPassword">Vérification du mot de passe</label>
          <input
            className='border w-[50vh] m-auto mb-10'
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
      <section className="w-full min-h-[5vh] bg-buffer"></section>
    </div>
  )
}

export default CreateAccount
