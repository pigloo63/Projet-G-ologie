/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const MineralField = ({elementMineral}) => {

    return (
        <div>
            {elementMineral && <div className='border rounded-3xl p-5 w-auto ml-20 positionMineralField'>
                <div>
                    <h2>Nom du minéral: {elementMineral.name}</h2>
                    <h2 className='mt-3'>Formule Chimique: {elementMineral.chimicalFormula}</h2>
                    <h2 className='mt-3'>Description: {elementMineral.description}</h2>
                    <h2 className='mt-3'>Couleur: {elementMineral.color}</h2>
                    <h2 className='mt-3'>Eclat: {elementMineral.eclat}</h2>
                    <h2 className='mt-3'>Dureté: '{elementMineral.durete}</h2>
                    <h2 className='mt-3'>Opacité: {elementMineral.opacity}</h2>
                    <h2 className='mt-3'>Densité: {elementMineral.density}</h2>
                    <h2 className='mt-3'>Habitus et forme: {elementMineral.habitus}</h2>
                    <h2 className='mt-3'>Système cristallin: {elementMineral.crystalMesh}</h2>
                </div>
                <div className=''>
                    <h2 className='mt-3'>Image du mineral:</h2>
                    <img src={elementMineral.imgMineral} alt="image du mineral" />
                </div>
                <div>
                    {elementMineral.imgMic && <h2>Image au Microscope</h2>}
                    {elementMineral.imgMic && <img src={elementMineral.imgMic} alt="image du mineral" />}
                </div>
                <div>
                    {elementMineral.imgDiagram && <h2>Diagram</h2>}
                    {elementMineral.imgDiagram && <img src={elementMineral.imgDiagram} alt="image du mineral" />}
                </div>
            </div>} 
        </div>
    )
}

export default MineralField;