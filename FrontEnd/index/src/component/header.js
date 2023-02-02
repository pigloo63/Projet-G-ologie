/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState, useEffect } from 'react'
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

  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const scrollTop = () => {
      setScroll(window.scrollY)
    }
    window.addEventListener('scroll', scrollTop)

  }, [])



  return (
    <div>
      {(scroll <= 700) && <div className='bg-white w-full h-[7vh] fixed border-b-[5px]'>
        <div className="fixed top-4 left-10">
          <nav>
            <ul>
              <li className="deroulant">
                <a href="#" className=''>Menu</a>
                {!isLoggedIn && (
                  <ul className="sous">
                    {/*location.pathname permet d'indiquer la page en cours, si page d'acceuil on n'affiche pas le lien*/}
                    {location.pathname !== '/' && (
                      <li>
                        <Link to="/">Page d'accueil</Link>
                      </li>
                    )}
                    <li>
                      <Link to='/auth'> Se connecter</Link>
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
      </div>}
        {/* {openConnect && <AuthForm/>} */}
    </div>
  )
}

export default Header
