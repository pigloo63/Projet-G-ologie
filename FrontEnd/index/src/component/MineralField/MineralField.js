/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const MineralField = ({ elementMineral }) => {
  return (
    <div>
      {elementMineral && (
        <div className="p-5 w-auto absolute top-[40vh] left-[200px]">
          <div className="flex">
            <div className="flex">
              <div className="h-2">
                <h2 className="font-bold">Nom du minéral: </h2>
                <p>{elementMineral.name}</p>
                <h2 className="mt-5 font-bold">Formule Chimique:</h2>
                <p>{elementMineral.chimicalFormula}</p>
                <h2 className="mt-5 font-bold">Description:</h2>
                <p>{elementMineral.description}</p>
                <h2 className="mt-5 font-bold">Couleur:</h2>
                <p>{elementMineral.color}</p>
                <h2 className="mt-5 font-bold">Eclat:</h2>
                <p>{elementMineral.eclat}</p>
              </div>
              <div className="ml-[10vh] w-[50vh]">
                <h2 className="font-bold">Dureté:</h2>
                <p>{elementMineral.durete}</p>
                <h2 className="mt-5 font-bold">Opacité:</h2>
                <p>{elementMineral.opacity}</p>
                <h2 className="mt-5 font-bold">Densité:</h2>
                <p>{elementMineral.density}</p>
                <h2 className="mt-5 font-bold">Habitus et forme:</h2>
                <p>{elementMineral.habitus}</p>
                <h2 className="mt-5 font-bold">Système cristallin:</h2>
                <p>{elementMineral.crystalMesh}</p>
              </div>
            </div>
            <div className="font-bold ml-[10vh]">
              <h2 className="font-bold mb-5">Image du mineral:</h2>
              <img
                src={elementMineral.image}
                alt="image du mineral"
                className="h-[65%]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MineralField
