import React, { useState } from 'react'

// Page de l'utilisateur
const UserPages = () => {
  const [display, setDiplay] = useState(false)

  const displayModal = () => {
    setDiplay((displayModalPassword) => !displayModalPassword)
  }

  return (
    <>
      <section className="parallax-config bg-cover min-h-[95vh] w-[45%]">
        <div className="absolute top-[15%] left-[70%] text-center">
          <h2>Votre compte</h2>
          <h3>Pseudo</h3>
          <h3>Mail</h3>
          <button onClick={displayModal}>Changer le mot de passe</button>
          {!display && (
            <div className="w-[55%] h-full fixed top-[67px] left-[45%] bg-buffer">
              <div className="flex flex-col ml-[150px]">
                <input
                  type="password"
                  label="Votre ancien mot de passe"
                  placeholder="Mdp"
                  className="mt-3 w-[50%]"
                />
                <input
                  type="password"
                  label="Votre Nouveau mot de passe"
                  placeholder="new Mdp"
                  className="mt-3 w-[50%]"
                />
                <input
                  type="password"
                  label="Confirmation de votre nouveaux mot de passe"
                  placeholder="Confirmation du Mdp"
                  className="mt-3 w-[50%]"
                />
                <button onClick={displayModal}>Fermer la fenêtre</button>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="w-full min-h-[5vh] bg-buffer" />
    </>
  )
}

export default UserPages
