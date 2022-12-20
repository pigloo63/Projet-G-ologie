import React from 'react'
import { Link } from 'react-router-dom'

const Halogénures = () => {
    return (
        <div>
            <Link to='/'> <span className='cursor-pointer hover:font-bold absolute top-0 right-20 mt-10'> Page d'accueil</span></Link>
            <div className=''>
                <span>Les minéraux:</span>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Halogénures