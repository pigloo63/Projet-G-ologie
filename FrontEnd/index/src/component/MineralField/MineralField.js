import React, { useState } from 'react';

const MineralField = ({data}) => {
    const [dataMineral, setDataMineral] = useState(data)

    return (
        <div>
            <div className='ml-60 absolute top-20 mt-20 border rounded-3xl p-4 w-auto'>
                <h2>Nom du minéral:</h2>
                <h2>Formule Chimique:</h2>
                <h2>Description:</h2>
                <h2>Couleur:</h2>
                <h2>Eclat:</h2>
                <h2>Dureté:</h2>
                <h2>Opacité:</h2>
                <h2>Densité:</h2>
                <h2>Habitus et forme:</h2>
                <h2>Système cristallin:</h2>
                <h2>image au microscope:</h2>
            </div>
        </div>
    )
}

export default MineralField;