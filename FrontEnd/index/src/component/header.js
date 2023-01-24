/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import "../css/Index.css";
import { Link } from "react-router-dom";
import image from "../images/Bandeau_de_presentation.jpg";
import AuthContext from "../context/authContext";
import { useHistory } from "react-router-dom";
import "../css/header.css";
import AuthForm from "../auth/AuthForm";

const Header = () => {
  const [openConnect, setOpenConnect] = useState(false);

  const authContext = useContext(AuthContext);

  const isLoggedIn = authContext.isLoggedIn;

  const history = useHistory();

  function handleClick() {
    authContext.logout();
    history.push("/");
  }

  const openConnectHandler = () => {
    setOpenConnect((open) => !open);
  };

  return (
    <div>
      <div className="mx-auto mb-10">
        <img
          src={image}
          alt="bandeau de présentation"
          className="image_presentation"
        /> 
        <div className="flex flex-col justify-center text-center absolute m-auto top-10 left-[850px]">
          <p className="text-5xl font-bold underline text-white">GéoSite</p>
          <p className="text-3x2 text-white">La référence dans la géologie</p>
        </div>
        <div className="absolute top-10 left-10 flex flex-col">
          <nav>
            <ul>
              <li className="deroulant">
                <a href="#">Menu</a>
                {!isLoggedIn && (
                  <ul className="sous">
                    <li>
                      <Link to="/">Page d'accueil</Link>
                    </li>
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
    </div>
  );
};

export default Header;
