import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import '../css/Index.css'

const Home = () => {

    const [displayHabitus, setDisplayHabitus] = useState(false)
    const [displayEclat, setDisplayEclat] = useState(false)
    const [displayColor, setDisplayColor] = useState(false)
    const [displayDurete, setDisplayDurete] = useState(false)
    const [displayOpacity, setDisplayOpacity] = useState(false)
    const [displayDensity, setDisplayDensity] = useState(false)
    const [displaySytem, setDisplaySystem] = useState(false)
    const [displayClassification, setDisplayClassification] = useState(false)

    const displayModalColor = () => {
        if(displayClassification === true || displayDensity === true || displayEclat === true || displayDurete === true || displayHabitus === true || displayOpacity === true || displaySytem === true){
            setDisplayClassification(false)
            setDisplayHabitus(false)
            setDisplayDensity(false)
            setDisplayEclat(false)
            setDisplayDurete(false)
            setDisplaySystem(false)
            setDisplayOpacity(false)
        }
        setDisplayColor((displayColor) => !displayColor)
    }

    const displayModalHabitus = () => {
        if(displayClassification === true || displayDensity === true || displayEclat === true || displayDurete === true || displayColor === true || displayOpacity === true || displaySytem === true){
            setDisplayClassification(false)
            setDisplayColor(false)
            setDisplayDensity(false)
            setDisplayEclat(false)
            setDisplayDurete(false)
            setDisplaySystem(false)
            setDisplayOpacity(false)
        }
        setDisplayHabitus((displayHabitus) => !displayHabitus)
    }

    const displayModalEclat = () => {
        if(displayClassification === true || displayDensity === true || displayHabitus === true || displayDurete === true || displayColor === true || displayOpacity === true || displaySytem === true){
            setDisplayClassification(false)
            setDisplayColor(false)
            setDisplayDensity(false)
            setDisplayHabitus(false)
            setDisplayDurete(false)
            setDisplaySystem(false)
            setDisplayOpacity(false)
        }
        setDisplayEclat((displayEclat) => !displayEclat)
    }

    const displayModalDurete = () => {
        if(displayClassification === true || displayDensity === true || displayHabitus === true || displayEclat === true || displayColor === true || displayOpacity === true || displaySytem === true){
            setDisplayClassification(false)
            setDisplayColor(false)
            setDisplayDensity(false)
            setDisplayHabitus(false)
            setDisplayEclat(false)
            setDisplaySystem(false)
            setDisplayOpacity(false)
        }
        setDisplayDurete((displayDurete) => !displayDurete)
    }

    const displayModalOpacity = () => {
        if(displayClassification === true || displayDensity === true || displayHabitus === true || displayEclat === true || displayColor === true || displayDurete === true || displaySytem === true){
            setDisplayClassification(false)
            setDisplayColor(false)
            setDisplayDensity(false)
            setDisplayHabitus(false)
            setDisplayEclat(false)
            setDisplaySystem(false)
            setDisplayDurete(false)
        }
        setDisplayOpacity((displayOpacity) => !displayOpacity)
    }

    const displayModalDensity = () => {
        if(displayClassification === true || displayOpacity === true || displayHabitus === true || displayEclat === true || displayColor === true || displayDurete === true || displaySytem === true){
            setDisplayClassification(false)
            setDisplayColor(false)
            setDisplayOpacity(false)
            setDisplayHabitus(false)
            setDisplayEclat(false)
            setDisplaySystem(false)
            setDisplayDurete(false)
        }
        setDisplayDensity((displayDensity) => !displayDensity)
    }

    const displayModalSystem = () => {
        if(displayClassification === true || displayOpacity === true || displayHabitus === true || displayEclat === true || displayColor === true || displayDurete === true || displayDensity === true){
            setDisplayClassification(false)
            setDisplayColor(false)
            setDisplayOpacity(false)
            setDisplayHabitus(false)
            setDisplayEclat(false)
            setDisplayDensity(false)
            setDisplayDurete(false)
        }
        setDisplaySystem((displaySystem) => !displaySystem)
    }

    const displayModalClassification = () => {
        if(displaySytem === true || displayOpacity === true || displayHabitus === true || displayEclat === true || displayColor === true || displayDurete === true || displayDensity === true){
            setDisplaySystem(false)
            setDisplayColor(false)
            setDisplayOpacity(false)
            setDisplayHabitus(false)
            setDisplayEclat(false)
            setDisplayDensity(false)
            setDisplayDurete(false)
        }
        setDisplayClassification((displayClassification) => !displayClassification)
    }

    return (
        <div>
            <div className='flex w-auto m-auto'>
            <section className='border p-6 rounded-3xl mr-10'>
                <article > 
                    <span>
                        Se site aura pour objectifs de représenter et d'identifier la plupart des minéraux qu'il est ssceptible de rencontrer dans la nature.<br />
                        Chaque minéral aurra donc ca propre fiche afin que vous puissiez avoir toutes les informations nécessaires en un clin d'oeil. 
                    </span>
                    <div className='mt-5'>
                        <p>Afin de classer ces minéraux, plusieurs proproété sont utilisées :</p> 
                        <ul className='list-disc list-inside mt-5 ml-6'>
                            <li className='mb-1'>
                                <button onClick={displayModalColor} className='cursor-pointer hover:font-bold' id ='displayColor'>La couleur</button>
                                {displayColor && <div className='border p-4 absolute bg-gray-400 rounded-xl top-1/3 w-1/3 left-1/3'>
                                    <span>
                                    La couleur s'avère utile si elle permet de caractérisé spécifiquement un minéral. Cependant, la couleur peut varier en fonction
                                    de l'impureté d'un minéral.
                                    </span>
                                    <p onClick={displayModalColor} className='cursor-pointer hover:font-bold'>Fermer</p>
                                </div>}
                            </li>
                            <li className='mb-1'>
                                <button className='cursor-pointer hover:font-bold' onClick={displayModalEclat}>L'éclat</button>
                                    {displayEclat && 
                                    <div className='border p-4 absolute bg-gray-400 rounded-xl w-1/3 top-1/3 right-1/2 left-1/3'>
                                        <span>
                                            L'éclat décrit l'aspect d'une face cristalline en lumière réfléchie. Les minéraux opaque, comme les métaux et nombre de sulfures, ont
                                            un éclat métallique; imparfait, l'éclat est semi-métallique. Le terme générique d'éclat non métallique s'applique à tout le reste,
                                            dont les minéraux transparents et translucides. Il inlclut :
                                        </span>
                                                <ul className='list-disc list-inside' >
                                                <li>Adamantin: Hautement réfléchie</li>
                                                <li>Vitreux: Comme le quarts</li>
                                                <li>Résineux: Comme la résine ou l'ambre</li>
                                                <li>Nacré: Comme la perle</li>
                                                <li>Soyeux: Dû à une structure fibreuse sous-jacente</li>
                                                <li>Gras: Produit par une surface irréguliére</li>
                                                <li>Terreux ou terne: Surface mate des minéraux épourvus d'éclat</li>
                                                <p onClick={displayModalEclat} className='hover:font-bold cursor-pointer'>Fermer</p>
                                            </ul>
                                </div>}
                            </li>
                            <li className='mb-1'>
                                <button onClick={displayModalOpacity} className='cursor-pointer hover:font-bold'>Opacité ou Transparence</button>
                                {displayOpacity && <div className='border p-4 absolute bg-gray-400 rounded-xl top-1/3 right-1/3'>
                                    <span>
                                        La quantité de lumière absorbée détermine si un minéral est transparent, translucide ou opaque.
                                    </span>
                                    <p onClick={displayModalOpacity} className='hover:font-bold'>Fermer</p>
                                </div>}
                            </li>
                            <li className='mb-1'>
                                <button onClick={displayModalDurete} className='cursor-pointer hover:font-bold'>La dureté:</button>
                                    {displayDurete && <div className='border p-4 absolute bg-gray-400 rounded-xl top-1/3 right-1/3'>
                                        <span>
                                            La dureté d'un minéral est définie comme la résitance à l'abrasion ou à la rayure. On utilise pour ceci l'échelle de Mohs.
                                        </span>
                                        <p onClick={displayModalDurete} className='hover:font-bold'>Fermer</p>
                                    </div>}
                            </li>
                            <li className='mb-1'>
                                <button onClick={displayModalDensity} className='hover:font-bold cursor-pointer'>La Densité spécifique:</button>
                                {displayDensity && <div className='border p-4 absolute bg-gray-400 rounded-xl top-1/3 right-1/3'>
                                    <span>
                                        La masse volumique d'un minéral est calculée en divisant sont poid par son volume. Elle s'exprime en g/cm3.
                                    </span>
                                    <p onClick={displayModalDensity} className='hover:font-bold cursor-pointer'>Fermer</p>
                                </div>}
                            </li>
                            <li className='mb-1'>
                                <button onClick={displayModalHabitus} className='hover:font-bold cursor-pointer'>Habitus et Forme</button> 
                                {displayHabitus && <div className='border p-4 absolute bg-gray-400 rounded-xl top-1/4 right-1/3 left-1/4' >
                                L'habitus est l'ensemble des caractériqtique externes d'un minéral, autrement dis ses formes cristallines et la manières dont
                                ces formes se combinent. On distincte 12 habitus et forme: <br />
                                <ul className='list-decimal list-inside'>
                                    <li>Ariculaire: en forme d'aiguille</li>
                                    <li>Foliacé: aplati comme la lame d'un couteau</li>
                                    <li>Botryoïde: en grappe</li>
                                    <li>Dendritique: arboré ou ramifié comme l mousse</li>
                                    <li>Fibreux: fils fins</li>
                                    <li>Lamellaire: formant des feuilles plates distinctes</li>
                                    <li>Mamelonné: masses arrondie intéférant les unes abev les autres</li>
                                    <li>Massifs: sans forme distincte</li>
                                    <li>Rayonnant: disposition radiale des aiguilles ou de fibres</li>
                                    <li>Réniforme: en forme de haricot</li>
                                    <li>Tabulaire: montrant des surface plate et larges</li>
                                    <li>Bacillaire: en forme de bâton</li>
                                    <p onClick={displayModalHabitus} className='cursor-pointer hover:font-bold'>Fermer</p>
                                </ul>
                                </div>}
                            </li>
                            <li className='mb-1'>
                                <button onClick={displayModalSystem} className='hover:font-bold cursor-pointer'>Sytème Cristallin:</button>
                                {displaySytem && <div className='border p-4 absolute bg-gray-400 rounded-xl top-1/3 right-1/4 w-1/2' >
                                    <span>
                                        La cristallographie décrit la forme et la smétrie des cristaux, leur structure interne et leur caractériqtiques chimiques et physiques associées.
                                        Sept système critallin existent, chacun comportant un nombre de forme cristallines - ensemble des faces résultant de l'action sur une seule face de tous les éléments
                                        de symétrie du cristal. Certaines formes cristallines sont typiques d'un sytème, tel que le cube pour le système cubique, l'authentification d'autre exige des mesures spécialisées.
                                    </span>
                                    <p onClick={displayModalSystem} className='cursor-pointer hover:font-bold'>Fermer</p>
                                </div>}
                            </li>
                            <li>
                                <button onClick={displayModalClassification} className='hover:font-bold cursor-pointer'>Classification:</button>
                                {displayClassification && <div className='border p-4 absolute bg-gray-400 rounded-xl top-1/3 right-1/3' >
                                    <span>
                                        Se site classifie les minéraux en fonction de leur famille respective, tels que les éléments natifs,ou les sulfates.
                                    </span>
                                    <p onClick={displayModalClassification} className='cursor-pointer hover:font-bold'>Fermer</p>
                                </div> }                             
                            </li>
                        </ul>
                    </div>

                </article>
            </section>
            <section className='border h-60 rounded-3xl p-4 w-80'>
                <span>Familles de Minéraux</span>
                    <ul className='list-decimal list-inside pt-1'>
                        <Link to='/natifs'>
                            <li className='hover:font-bold cursor-pointer mb-1'>Elément Natifs</li> 
                        </Link>
                        <Link to='/sulfures'>
                            <li className='hover:font-bold cursor-pointer mb-1'>Sulfures et sulfosels</li>
                        </Link>
                        <Link to='/halogenures'>
                            <li className='hover:font-bold cursor-pointer mb-1'>Halogénures et oxydes</li>
                        </Link>
                        <Link to='/carbonates'>
                            <li className='hover:font-bold cursor-pointer mb-1'>Carbonates et borates</li>
                        </Link>
                        <Link to='/sulfates'>
                            <li className='hover:font-bold cursor-pointer mb-1'>Sulfates</li>                
                        </Link>
                        <Link to='/phosphates'>
                            <li className='hover:font-bold cursor-pointer mb-1'>Phosphates</li>
                        </Link>
                        <Link to='/silicates'>
                            <li className='hover:font-bold cursor-pointer'>Silicates et composé Organiques</li>
                        </Link>
                    </ul>
            </section>
            
            </div>
        </div>
    );
};

export default Home;