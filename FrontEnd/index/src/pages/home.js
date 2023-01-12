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
        <div className='ml-[200px]'>
            <div className='flex w-auto'>
                <section className='border p-6 rounded-3xl mr-10 bg-white'>
                    <article> 
                        <span>
                            Se site aura pour objectifs de représenter et d'identifier la plupart des minéraux qu'il est susceptible de rencontrer dans la nature.<br />
                            Chaque minéral aurra donc ca propre fiche afin que vous puissiez avoir toutes les informations nécessaires en un clin d'oeil. 
                        </span>
                        <div className='mt-5'>
                            <p>Afin de classer ces minéraux, plusieurs propriété sont utilisées :</p> 
                            <ul className='list-disc list-inside mt-5 ml-6'>
                                <li className='mb-3'>
                                    <button onClick={displayModalColor} className='cursor-pointer hover:font-bold' id ='displayColor'>La couleur</button>
                                    {displayColor && <div className='border p-4 absolute bg-gray-400 rounded-xl top-1/3 w-1/3 left-1/3'>
                                        <span>
                                        La couleur s'avère utile si elle permet de caractérisé spécifiquement un minéral. Cependant, la couleur peut varier en fonction
                                        de l'impureté d'un minéral.
                                        </span>
                                        <p onClick={displayModalColor} className='cursor-pointer hover:font-bold mt-2'>Fermer</p>
                                    </div>}
                                </li>
                                <li className='mb-3'>
                                    <button className='cursor-pointer hover:font-bold' onClick={displayModalEclat}>L'éclat</button>
                                        {displayEclat && 
                                        <div className='border p-4 absolute bg-gray-400 rounded-xl w-1/3 top-1/3 right-1/2 left-1/3'>
                                            <span>
                                                L'éclat décrit l'aspect d'une face cristalline en lumière réfléchie. Les minéraux opaque, comme les métaux et nombre de sulfures, ont
                                                un éclat métallique; imparfait, l'éclat est semi-métallique. Le terme générique d'éclat non métallique s'applique à tout le reste,
                                                dont les minéraux transparents et translucides. Il inlclut :
                                            </span>
                                            <ul className='list-disc list-inside mt-2' >
                                                <li className='mb-1'>Adamantin: Hautement réfléchie</li>
                                                <li className='mb-1'>Vitreux: Comme le quarts</li>
                                                <li className='mb-1'>Résineux: Comme la résine ou l'ambre</li>
                                                <li className='mb-1'>Nacré: Comme la perle</li>
                                                <li className='mb-1'>Soyeux: Dû à une structure fibreuse sous-jacente</li>
                                                <li className='mb-1'>Gras: Produit par une surface irréguliére</li>
                                                <li className='mb-1'>Terreux ou terne: Surface mate des minéraux épourvus d'éclat</li>
                                                <p onClick={displayModalEclat} className='hover:font-bold cursor-pointer mt-2'>Fermer</p>
                                            </ul>
                                        </div>}
                                </li>
                                <li className='mb-3'>
                                    <button onClick={displayModalOpacity} className='cursor-pointer hover:font-bold'>Opacité ou Transparence</button>
                                    {displayOpacity && <div className='border p-4 absolute bg-gray-400 rounded-xl top-1/3 right-1/3'>
                                        <span>
                                            La quantité de lumière absorbée détermine si un minéral est transparent, translucide ou opaque.
                                        </span>
                                        <p onClick={displayModalOpacity} className='hover:font-bold cursor-pointer mt-2'>Fermer</p>
                                    </div>}
                                </li>
                                <li className='mb-3'>
                                    <button onClick={displayModalDurete} className='cursor-pointer hover:font-bold'>La dureté:</button>
                                        {displayDurete && <div className='border p-4 absolute bg-gray-400 rounded-xl top-1/3 right-1/3'>
                                            <span>
                                                La dureté d'un minéral est définie comme la résitance à l'abrasion ou à la rayure. On utilise pour ceci l'échelle de Mohs.
                                            </span>
                                            <p onClick={displayModalDurete} className='hover:font-bold cursor-pointer mt-2'>Fermer</p>
                                        </div>}
                                </li>
                                <li className='mb-3'>
                                    <button onClick={displayModalDensity} className='hover:font-bold cursor-pointer'>La Densité spécifique</button>
                                    {displayDensity && <div className='border p-4 absolute bg-gray-400 rounded-xl top-1/3 right-1/3'>
                                        <span>
                                            La masse volumique d'un minéral est calculée en divisant sont poid par son volume. Elle s'exprime en g/cm3.
                                        </span>
                                        <p onClick={displayModalDensity} className='hover:font-bold cursor-pointer mt-2'>Fermer</p>
                                    </div>}
                                </li>
                                <li className='mb-3'>
                                    <button onClick={displayModalHabitus} className='hover:font-bold cursor-pointer'>Habitus et Forme</button> 
                                    {displayHabitus && <div className='border p-4 absolute bg-gray-400 rounded-xl top-1/4 right-1/3 left-1/4' >
                                    L'habitus est l'ensemble des caractériqtique externes d'un minéral, autrement dis ses formes cristallines et la manières dont
                                    ces formes se combinent. On distincte 12 habitus et forme: <br />
                                    <ul className='list-disc list-inside mt-2'>
                                        <li className='mb-1'>Ariculaire: en forme d'aiguille</li>
                                        <li className='mb-1'>Foliacé: aplati comme la lame d'un couteau</li>
                                        <li className='mb-1'>Botryoïde: en grappe</li>
                                        <li className='mb-1'>Dendritique: arboré ou ramifié comme l mousse</li>
                                        <li className='mb-1'>Fibreux: fils fins</li>
                                        <li className='mb-1'>Lamellaire: formant des feuilles plates distinctes</li>
                                        <li className='mb-1'>Mamelonné: masses arrondie intéférant les unes abev les autres</li>
                                        <li className='mb-1'>Massifs: sans forme distincte</li>
                                        <li className='mb-1'>Rayonnant: disposition radiale des aiguilles ou de fibres</li>
                                        <li className='mb-1'>Réniforme: en forme de haricot</li>
                                        <li className='mb-1'>Tabulaire: montrant des surface plate et larges</li>
                                        <li className='mb-1'>Bacillaire: en forme de bâton</li>
                                        <p onClick={displayModalHabitus} className='cursor-pointer hover:font-bold mt-3'>Fermer</p>
                                    </ul>
                                    </div>}
                                </li>
                                <li className='mb-3'>
                                    <button onClick={displayModalSystem} className='hover:font-bold cursor-pointer'>Sytème Cristallin</button>
                                    {displaySytem && <div className='border p-4 absolute bg-gray-400 rounded-xl top-1/3 right-1/4 w-1/2' >
                                        <span>
                                            La cristallographie décrit la forme et la smétrie des cristaux, leur structure interne et leur caractériqtiques chimiques et physiques associées.
                                            Sept système critallin existent, chacun comportant un nombre de forme cristallines - ensemble des faces résultant de l'action sur une seule face de tous les éléments
                                            de symétrie du cristal. Certaines formes cristallines sont typiques d'un sytème, tel que le cube pour le système cubique, l'authentification d'autre exige des mesures spécialisées.
                                        </span>
                                        <p onClick={displayModalSystem} className='cursor-pointer hover:font-bold mt-3'>Fermer</p>
                                    </div>}
                                </li>
                                <li>
                                    <button onClick={displayModalClassification} className='hover:font-bold cursor-pointer'>Classification</button>
                                    {displayClassification && <div className='border p-4 absolute bg-gray-400 rounded-xl top-1/3 right-1/3' >
                                        <span>
                                            Se site classifie les minéraux en fonction de leur famille respective, tels que les éléments natifs,ou les sulfates.
                                        </span>
                                        <p onClick={displayModalClassification} className='cursor-pointer hover:font-bold mt-3'>Fermer</p>
                                    </div> }                             
                                </li>
                            </ul>
                        </div>

                    </article>
                </section>
                <section className='border h-60 rounded-3xl p-3 w-80 bg-white'>
                    <span>Familles de Minéraux</span>
                        <ul className='list-decimal list-inside mt-1 ml-5'>
                            <Link to='/Natifs'>
                                <li className='hover:font-bold cursor-pointer mb-1'>Elément Natifs</li> 
                            </Link>
                            <Link to='/Sulfures'>
                                <li className='hover:font-bold cursor-pointer mb-1'>Sulfures et sulfosels</li>
                            </Link>
                            <Link to='/Halogenures'>
                                <li className='hover:font-bold cursor-pointer mb-1'>Halogénures et oxydes</li>
                            </Link>
                            <Link to='/Carbonates'>
                                <li className='hover:font-bold cursor-pointer mb-1'>Carbonates et borates</li>
                            </Link>
                            <Link to='/Sulfates'>
                                <li className='hover:font-bold cursor-pointer mb-1'>Sulfates</li>                
                            </Link>
                            <Link to='/Phosphates'>
                                <li className='hover:font-bold cursor-pointer mb-1'>Phosphates</li>
                            </Link>
                            <Link to='/Silicates'>
                                <li className='hover:font-bold cursor-pointer'>Silicates et composé Organiques</li>
                            </Link>
                        </ul>
                </section>
            </div>
        </div>
    );
};

export default Home;