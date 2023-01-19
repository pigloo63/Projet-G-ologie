import React, { createContext, useState } from "react";
import PropType from "prop-types";

const defaultValues = {
  token: "",
  userId: null,
  userAdmin: false,
  userIsLoggedIn: false,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext(defaultValues);

const toeknStorage = localStorage.getItem("token");
const userIdStorage = localStorage.getItem("userId");

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(toeknStorage);
  const [userId, setUserId] = useState(userIdStorage);

  const loginHandler = (token, userId) => {
    setToken(token);
    setUserId(userId);
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
  };

  const logoutHandler = () => {
    setToken(null);
    setUserId(null);
    localStorage.clear();
  };

  //convertie le token en valeur booléene
  const userIsLoggedIn = !!token;

  const contextValue = {
    token: token,
    userId: userId,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropType.node,
};

export default AuthContext;
