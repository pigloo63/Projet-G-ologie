import React from 'react'
import { Link } from 'react-router-dom'

const Sulfates = () => {
    return (
        <div>
            <h1>Ici la page des sulfates</h1>
            <Link to='/'> <span className='cursor-pointer hover:font-bold'> Page d'accueil</span></Link>
        </div>
    );
};

export default Sulfates