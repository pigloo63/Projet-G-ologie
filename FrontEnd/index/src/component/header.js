import React from 'react';
import '../css/Index.css'

const Header = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='flex flex-col justify-center text-center p-6'>
                    <p className="text-3xl font-bold underline">GéoSite</p>
                    <p className='text-3x2'>La référence dans la géologie</p>
                </div>
            </div>
        </div>
    );
};

export default Header;