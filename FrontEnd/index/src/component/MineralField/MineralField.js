import React from 'react';

const MineralField = ({elementMineral}) => {

    return (
        <div>
            <div className='ml-60 absolute top-20 mt-20 border rounded-3xl p-4 w-auto'>
                {elementMineral && <h2>Nom du minéral: {elementMineral.name}</h2>}
                {elementMineral && <h2>Formule Chimique: {elementMineral.chimicalFormula}</h2>}
                {elementMineral && <h2>Description:</h2>}
                {elementMineral && <h2>Couleur:</h2>}
                {elementMineral && <h2>Eclat:</h2>}
                {elementMineral && <h2>Dureté:</h2>}
                {elementMineral && <h2>Opacité:</h2>}
                {elementMineral && <h2>Densité:</h2>}
                {elementMineral && <h2>Habitus et forme:</h2>}
                {elementMineral && <h2>Système cristallin:</h2>}
                {elementMineral && <h2>image au microscope:</h2>}
            </div>
        </div>
    )
}

export default MineralField;