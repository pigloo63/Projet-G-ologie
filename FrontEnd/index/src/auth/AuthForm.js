import React, { useRef, useState, useContext } from 'react'
import AuthContext from '../context/authContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const AuthForm = ({ closeModal }) => {
  const identifiantInputRef = useRef()
  const pwdInputRef = useRef()

  const authContext = useContext(AuthContext)

  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState()
  const [error, setError] = useState(false)

  //Fonction et useState permettant d'afficher lors d'une erreur de mot de passe la modale
  // eslint-disable-next-line no-unused-vars
  const [close, setClose] = useState(true)
  console.log(close)

  //Fonction pour envoyer les éléments au back
  const submitHandler = (e) => {
    e.preventDefault()

    const enteredidentifiant = identifiantInputRef.current.value
    const enteredPwd = pwdInputRef.current.value

    const url = 'http://localhost:4000/api/auth/login'

    const fetchlog = async () => {
      try {
        const result = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            identifiant: enteredidentifiant,
            password: enteredPwd,
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
          authContext.login(dataResult.token, dataResult.userId)
        }

        identifiantInputRef.current.value = ''
        pwdInputRef.current.value = ''

        if (result.ok) {
          closeModal()
        }
      } catch (error) {
        console.log("Pas de réponse de l'API")
      }
    }
    fetchlog()
  }

  return (
    <div>
      <div>
        {close && (
          <section className="fixed top-1/4 right-1/2 translate-x-1/2 border bg-slate-300 rounded-3xl m-auto p-10 w-[400px]">
            <FontAwesomeIcon
              onClick={closeModal}
              icon={faXmark}
              className="cursor-pointer mb-5"
              size="lg"
            />
            <p className="text-center">CONNECTEZ-VOUS</p>
            <form
              onSubmit={submitHandler}
              className="flex flex-col mt-10 text-center"
            >
              <label htmlFor="identifiant" className="mb-5">
                Votre identifiant
              </label>
              <input
                className="mb-10"
                type="text"
                name="identifiant"
                id="identifiant"
                ref={identifiantInputRef}
                required
              />
              <label htmlFor="password" className="mb-5">
                Mot de passe
              </label>
              <input
                className="mb-10"
                type="password"
                name="password"
                id="password"
                ref={pwdInputRef}
                required
              />
              {error && (
                <div className="mb-5">
                  <p>Le mot de passe et/ou l'identifiant sont incorecte</p>
                </div>
              )}
              <button type={'submit'}>Se connecter</button>
            </form>
            <div className="mt-5 flex">
              <p className="mr-2">Nouvelle utilisateur ? </p>
              <Link
                to="/createAccount"
                onClick={closeModal}
                className="hover:font-bold"
              >
                Je crée mon compte
              </Link>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default AuthForm
