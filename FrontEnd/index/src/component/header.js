/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react'
import '../css/Index.css'
import { Link, useLocation } from 'react-router-dom'
// import image from '../images/Bandeau_de_presentation.jpg'
import AuthContext from '../context/authContext'
import { useHistory } from 'react-router-dom'
import '../css/header.css'
import AuthForm from '../auth/AuthForm'

const Header = () => {
  const [openConnect, setOpenConnect] = useState(false)

  const authContext = useContext(AuthContext)

  const isLoggedIn = authContext.isLoggedIn

  const history = useHistory()

  //Permet de retourner la page ou nous sommes
  let location = useLocation()

  function handleClick() {
    authContext.logout()
    history.push('/')
  }

  const openConnectHandler = () => {
    setOpenConnect((open) => !open)
  }

  return (
    <div>
        <div className="absolute top-10 left-10 flex flex-col">
          <nav>
            <ul>
              <li className="deroulant">
                <a href="#">Menu</a>
                {!isLoggedIn && (
                  <ul className="sous">
                    {/*location.pathname permet d'indiquer la page en cours, si page d'acceuil on n'affiche pas le lien*/}
                    {location.pathname !== '/' && (
                      <li>
                        <Link to="/">Page d'accueil</Link>
                      </li>
                    )}
                    <li>
                      <a
                        href="#"
                        onClick={openConnectHandler}
                        className="hover:font-bold"
                      >
                        Se connecter
                      </a>
                    </li>
                    <li>
                      <Link
                        to="/createAccount"
                        className="cursor-pointer hover:font-bold"
                      >
                        Créer un compte
                      </Link>
                    </li>
                  </ul>
                )}
                {isLoggedIn && (
                  <ul className="sous">
                    <li>
                      <Link to="/">Page d'accueil</Link>
                    </li>
                    <li>
                      <Link
                        to="/addMineral"
                        className="hover:font-bold cursor-pointer"
                      >
                        Ajouter un minéral
                      </Link>
                    </li>
                    <li>
                      <a
                        onClick={handleClick}
                        className="cursor-pointer hover:font-bold"
                      >
                        Se déconnecter
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>
        {openConnect && <AuthForm closeModal={openConnectHandler} />}
    </div>
  )
}

export default Header
