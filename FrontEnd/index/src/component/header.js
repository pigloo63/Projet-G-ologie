/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState, useEffect } from 'react'
import '../css/Index.css'
import { Link, useLocation } from 'react-router-dom'
import AuthContext from '../context/authContext'
import { useHistory } from 'react-router-dom'
import '../css/header.css'

const Header = () => {
  const authContext = useContext(AuthContext)

  const isLoggedIn = authContext.isLoggedIn

  const history = useHistory()

  //Permet de retourner la page ou nous sommes
  let location = useLocation()

  function handleClick() {
    authContext.logout()
    history.push('/')
  }

  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const scrollTop = () => {
      setScroll(window.scrollY)
    }
    window.addEventListener('scroll', scrollTop)
  }, [])

  return (
    <div>
      {scroll <= 700 && (
        <div className="w-full h-[7vh] fixed border-b-[5px] bg-neutral">
          <div className="fixed top-4 left-10">
            <nav className="flex">
              <ul className="w-[10vh]">
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
                        <Link to="/auth"> Se connecter</Link>
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
                      {location.pathname !== '/' && (
                        <li>
                          <Link to="/">Page d'accueil</Link>
                        </li>
                      )}
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
              <ul className="ml-[200px] w-[10vh]">
                <li className="deroulant">
                  <a href="#">Définitions</a>
                  <ul className="sous">
                    <li>
                      <Link to="/definition">Propriétés Minéralogiques</Link>
                    </li>
                  </ul>
                </li>
              </ul>
              {isLoggedIn && (
                <ul className="ml-[200px] w-[10vh]">
                  <li>
                    <Link to="/searchMineral">Recherche</Link>
                  </li>
                </ul>
              )}
              {location.pathname !== '/' &&
                location.pathname !== '/createAccount' &&
                location.pathname !== '/auth' &&
                location.pathname !== '/addMineral' && (
                  <ul className="ml-[200px] w-[20vh] absolute left-[130vh]">
                    <li className="deroulant">
                      <a href="#">Famille de minéraux</a>
                      <ul className="sous">
                        {location.pathname !== '/natifs' && (
                          <li>
                            <Link to="/natifs">Elements natifs</Link>
                          </li>
                        )}
                        {location.pathname !== '/sulfures' && (
                          <li>
                            <Link to="/sulfures">Sulfures et sulfosels</Link>
                          </li>
                        )}
                        {location.pathname !== '/halogenures' && (
                          <li>
                            <Link to="/halogenures">Halogénures et oxydes</Link>
                          </li>
                        )}
                        {location.pathname !== '/carbonates' && (
                          <li>
                            <Link to="/carbonates">Carbonates et borates</Link>
                          </li>
                        )}
                        {location.pathname !== '/sulfates' && (
                          <li>
                            <Link to="/sulfates">Sulfates</Link>
                          </li>
                        )}
                        {location.pathname !== '/phosphates' && (
                          <li>
                            <Link to="/phosphates">Phosphates</Link>
                          </li>
                        )}
                        {location.pathname !== '/silicates' && (
                          <li>
                            <Link to="/silicates">
                              Silicates et composés organiques
                            </Link>
                          </li>
                        )}
                      </ul>
                    </li>
                  </ul>
                )}
            </nav>
          </div>
        </div>
      )}
      {/* {openConnect && <AuthForm/>} */}
    </div>
  )
}

export default Header
