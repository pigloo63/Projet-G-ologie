/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const MineralField = ({elementMineral}) => {

    return (
        <div>
            {elementMineral && <div className='border rounded-3xl p-5 w-auto ml-20 positionMineralField bg-white'>
                <div className='flex'>
                    <div className='flex'>
                        <div className='h-2'>
                            <h2 className='font-bold'>Nom du minéral: </h2>
                            <span>{elementMineral.name}</span>
                            <h2 className='mt-3 font-bold'>Formule Chimique:</h2>
                            <span>{elementMineral.chimicalFormula}</span>
                            <h2 className='mt-3 font-bold'>Description:</h2>
                            <span>{elementMineral.description}</span>
                            <h2 className='mt-3 font-bold'>Couleur:</h2>
                            <span>{elementMineral.color}</span>
                            <h2 className='mt-3 font-bold'>Eclat:</h2>
                            <span>{elementMineral.eclat}</span>
                        </div>
                        <div className='ml-80'>
                            <h2 className='font-bold'>Dureté:</h2>
                            <span>{elementMineral.durete}</span>
                            <h2 className='mt-3 font-bold'>Opacité:</h2>
                            <span>{elementMineral.opacity}</span>
                            <h2 className='mt-3 font-bold'>Densité:</h2>
                            <span>{elementMineral.density}</span>
                            <h2 className='mt-3 font-bold'>Habitus et forme:</h2>
                            <span>{elementMineral.habitus}</span>
                            <h2 className='mt-3 font-bold'>Système cristallin:</h2>
                            <span>{elementMineral.crystalMesh}</span>
                        </div>
                    </div>
                    <div className='font-bold ml-[600px]'>
                        <h2 className='font-bold mb-5'>Image du mineral:</h2>
                        <img src={elementMineral.imgMineral} alt="image du mineral" />
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        {elementMineral.imgMic && <h2 className='font-bold mb-5'>Image au Microscope</h2>}
                        {elementMineral.imgMic && <img src={elementMineral.imgMic} alt="image du mineral" />}
                    </div>
                    <div className='ml-[400px]'>
                        {elementMineral.imgDiagram && <h2 className='font-bold mb-5'>Diagram</h2>}
                        {elementMineral.imgDiagram && <img src={elementMineral.imgDiagram} alt="image du mineral" />}
                    </div>
                </div>
            </div>} 
        </div>
    )
}

export default MineralField;