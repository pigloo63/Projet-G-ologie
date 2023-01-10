import React from 'react';
import '../css/Index.css'
import image from '../images/Bandeau_de_presentation.jpg'


const Header = () => {
    return (
        <div>
            <div className='container mx-auto mb-10'>
                <img src={image} alt="bandeau de présentation" className='image_presentation'/>
                <div className='flex flex-col justify-center text-center p-6 absolute m-auto top-10 left-[850px]'>
                    <p className="text-5xl font-bold underline text-white">GéoSite</p>
                    <p className='text-3x2 text-white'>La référence dans la géologie</p>
                </div>
            </div>
        </div>
    );
};

export default Header;