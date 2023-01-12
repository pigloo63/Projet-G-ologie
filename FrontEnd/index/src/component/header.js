import React, { useContext } from 'react';
import '../css/Index.css'
import { Link } from 'react-router-dom'
import image from '../images/Bandeau_de_presentation.jpg'
import AuthContext from '../context/authContext';
import { useHistory } from 'react-router-dom';


const Header = () => {

    const authContext = useContext(AuthContext)

    const isLoggedIn = authContext.isLoggedIn

    const history = useHistory()

    function handleClick() {
        authContext.logout()
        history.push('/')
    }

    return (
        <div>
            <div className='container mx-auto mb-10'>
                <img src={image} alt="bandeau de présentation" className='image_presentation'/>
                <div className='flex flex-col justify-center text-center p-6 absolute m-auto top-10 left-[850px]'>
                    <p className="text-5xl font-bold underline text-white">GéoSite</p>
                    <p className='text-3x2 text-white'>La référence dans la géologie</p>
                </div>
                <div className='absolute top-10 left-10 flex flex-col'>
                    {!isLoggedIn && <Link to='/auth' className='mb-5'>Se connecter</Link>}
                    {isLoggedIn && <Link to="/addMineral" className='hover:font-bold cursor-pointer'>Ajouter un minéral</Link>}
                    {isLoggedIn && <p onClick={handleClick} className='mt-5 cursor-pointer hover:font-bold'>Se déconnecter</p>}
                </div>
            </div>
        </div>
    );
};

export default Header;