import React from 'react'
import { Link } from 'react-router-dom'

const Natifs = () => {
    return (
        <div>
            <Link to='/'> <span className='cursor-pointer hover:font-bold absolute top-0 right-20 mt-10'> Page d'accueil</span></Link>
            <div>
                <div className='border rounded-3xl p-4 w-40'>
                    <span className='mb-10'>Les minéraux:</span>
                    <ul className='list-decimal ml-10 mt-2'>
                        <li className='cursor-pointer hover:font-bold'>Cuivre</li>
                        <li className='cursor-pointer hover:font-bold mt-1'>Argent</li>
                        <li className='cursor-pointer hover:font-bold mt-1'>Cuivre</li>
                    </ul>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Natifs