import React, { useRef, useState, useContext } from 'react'
import AuthContext from '../context/authContext'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom'

const AuthForm = () => {
  const identifiantInputRef = useRef()
  const pwdInputRef = useRef()

  const authContext = useContext(AuthContext)

  const history = useHistory()

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
          history.push('/')
          authContext.login(dataResult.token, dataResult.userId)
        }

        identifiantInputRef.current.value = ''
        pwdInputRef.current.value = ''

      } catch (error) {
        console.log("Pas de réponse de l'API")
      }
    }
    fetchlog()
  }

  return (
    <div>
      <section className='parallax-config h-[95vh] bg-cover w-[45%]'>
        {close && (
          <div className="m-auto fixed top-1/3 left-[60%] w-[25%]">
            {/* <FontAwesomeIcon
              onClick={closeModal}
              icon={faXmark}
              className="cursor-pointer mb-5"
              size="lg"
            /> */}
            <p className="text-center text-2xl mt-[-10vh]">CONNECTEZ-VOUS</p>
            <form
              onSubmit={submitHandler}
              className="flex flex-col mt-[10vh] text-center"
            >
              <label htmlFor="identifiant" className="mb-5">
                Votre identifiant
              </label>
              <input
                className="mb-10 border"
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
                className="mb-10 border"
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
            <div className="mt-10 flex">
              <p className="mr-2">Nouvelle utilisateur ? </p>
              <Link
                to="/createAccount"
                className="hover:font-bold"
              >
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
