import React from "react";

const ErrorModalAuth = ({ closeWindow, close }) => {
  
  return (
    <div>
      {close && (
        <div className="fixed top-1/4 right-1/2 border bg-white rounded-3xl w-auto p-4">
          <div>
            <p>Message d'erreur</p>
          </div>
          <div>
            <p>Mot de passe et/ou identifiant est incorrecte</p>
          </div>
          <div className="mt-5">
            <button onClick={closeWindow}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorModalAuth;
