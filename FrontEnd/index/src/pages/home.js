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
                            Se site aura pour objectifs de repr??senter et d'identifier la plupart des min??raux qu'il est susceptible de rencontrer dans la nature.<br />
                            Chaque min??ral aurra donc ca propre fiche afin que vous puissiez avoir toutes les informations n??cessaires en un clin d'oeil. 
                        </span>
                        <div className='mt-5'>
                            <p>Afin de classer ces min??raux, plusieurs propro??t?? sont utilis??es :</p> 
                            <ul className='list-disc list-inside mt-5 ml-6'>
                                <li className='mb-1'>
                                    <button onClick={displayModalColor} className='cursor-pointer hover:font-bold' id ='displayColor'>La couleur</button>
                                    {displayColor && <div className='border p-4 absolute bg-gray-400 rounded-xl top-1/3 w-1/3 left-1/3'>
                                        <span>
                                        La couleur s'av??re utile si elle permet de caract??ris?? sp??cifiquement un min??ral. Cependant, la couleur peut varier en fonction
                                        de l'impuret?? d'un min??ral.
                                        </span>
                                        <p onClick={displayModalColor} className='cursor-pointer hover:font-bold'>Fermer</p>
                                    </div>}
                                </li>
                                <li className='mb-1'>
                                    <button className='cursor-pointer hover:font-bold' onClick={displayModalEclat}>L'??clat</button>
                                        {displayEclat && 
                                        <div className='border p-4 absolute bg-gray-400 rounded-xl w-1/3 top-1/3 right-1/2 left-1/3'>
                                            <span>
                                                L'??clat d??crit l'aspect d'une face cristalline en lumi??re r??fl??chie. Les min??raux opaque, comme les m??taux et nombre de sulfures, ont
                                                un ??clat m??tallique; imparfait, l'??clat est semi-m??tallique. Le terme g??n??rique d'??clat non m??tallique s'applique ?? tout le reste,
                                                dont les min??raux transparents et translucides. Il inlclut :
                                            </span>
                                                    <ul className='list-disc list-inside' >
                                                    <li>Adamantin: Hautement r??fl??chie</li>
                                                    <li>Vitreux: Comme le quarts</li>
                                                    <li>R??sineux: Comme la r??sine ou l'ambre</li>
                                                    <li>Nacr??: Comme la perle</li>
                                                    <li>Soyeux: D?? ?? une structure fibreuse sous-jacente</li>
                                                    <li>Gras: Produit par une surface irr??guli??re</li>
                                                    <li>Terreux ou terne: Surface mate des min??raux ??pourvus d'??clat</li>
                                                    <p onClick={displayModalEclat} className='hover:font-bold cursor-pointer'>Fermer</p>
                                                </ul>
                                    </div>}
                                </li>
                                <li className='mb-1'>
                                    <button onClick={displayModalOpacity} className='cursor-pointer hover:font-bold'>Opacit?? ou Transparence</button>
                                    {displayOpacity && <div className='border p-4 absolute bg-gray-400 rounded-xl top-1/3 right-1/3'>
                                        <span>
                                            La quantit?? de lumi??re absorb??e d??termine si un min??ral est transparent, translucide ou opaque.
                                        </span>
                                        <p onClick={displayModalOpacity} className='hover:font-bold cursor-pointer'>Fermer</p>
                                    </div>}
                                </li>
                                <li className='mb-1'>
                                    <button onClick={displayModalDurete} className='cursor-pointer hover:font-bold'>La duret??:</button>
                                        {displayDurete && <div className='border p-4 absolute bg-gray-400 rounded-xl top-1/3 right-1/3'>
                                            <span>
                                                La duret?? d'un min??ral est d??finie comme la r??sitance ?? l'abrasion ou ?? la rayure. On utilise pour ceci l'??chelle de Mohs.
                                            </span>
                                            <p onClick={displayModalDurete} className='hover:font-bold cursor-pointer'>Fermer</p>
                                        </div>}
                                </li>
                                <li className='mb-1'>
                                    <button onClick={displayModalDensity} className='hover:font-bold cursor-pointer'>La Densit?? sp??cifique</button>
                                    {displayDensity && <div className='border p-4 absolute bg-gray-400 rounded-xl top-1/3 right-1/3'>
                                        <span>
                                            La masse volumique d'un min??ral est calcul??e en divisant sont poid par son volume. Elle s'exprime en g/cm3.
                                        </span>
                                        <p onClick={displayModalDensity} className='hover:font-bold cursor-pointer'>Fermer</p>
                                    </div>}
                                </li>
                                <li className='mb-1'>
                                    <button onClick={displayModalHabitus} className='hover:font-bold cursor-pointer'>Habitus et Forme</button> 
                                    {displayHabitus && <div className='border p-4 absolute bg-gray-400 rounded-xl top-1/4 right-1/3 left-1/4' >
                                    L'habitus est l'ensemble des caract??riqtique externes d'un min??ral, autrement dis ses formes cristallines et la mani??res dont
                                    ces formes se combinent. On distincte 12 habitus et forme: <br />
                                    <ul className='list-decimal list-inside'>
                                        <li>Ariculaire: en forme d'aiguille</li>
                                        <li>Foliac??: aplati comme la lame d'un couteau</li>
                                        <li>Botryo??de: en grappe</li>
                                        <li>Dendritique: arbor?? ou ramifi?? comme l mousse</li>
                                        <li>Fibreux: fils fins</li>
                                        <li>Lamellaire: formant des feuilles plates distinctes</li>
                                        <li>Mamelonn??: masses arrondie int??f??rant les unes abev les autres</li>
                                        <li>Massifs: sans forme distincte</li>
                                        <li>Rayonnant: disposition radiale des aiguilles ou de fibres</li>
                                        <li>R??niforme: en forme de haricot</li>
                                        <li>Tabulaire: montrant des surface plate et larges</li>
                                        <li>Bacillaire: en forme de b??ton</li>
                                        <p onClick={displayModalHabitus} className='cursor-pointer hover:font-bold'>Fermer</p>
                                    </ul>
                                    </div>}
                                </li>
                                <li className='mb-1'>
                                    <button onClick={displayModalSystem} className='hover:font-bold cursor-pointer'>Syt??me Cristallin</button>
                                    {displaySytem && <div className='border p-4 absolute bg-gray-400 rounded-xl top-1/3 right-1/4 w-1/2' >
                                        <span>
                                            La cristallographie d??crit la forme et la sm??trie des cristaux, leur structure interne et leur caract??riqtiques chimiques et physiques associ??es.
                                            Sept syst??me critallin existent, chacun comportant un nombre de forme cristallines - ensemble des faces r??sultant de l'action sur une seule face de tous les ??l??ments
                                            de sym??trie du cristal. Certaines formes cristallines sont typiques d'un syt??me, tel que le cube pour le syst??me cubique, l'authentification d'autre exige des mesures sp??cialis??es.
                                        </span>
                                        <p onClick={displayModalSystem} className='cursor-pointer hover:font-bold'>Fermer</p>
                                    </div>}
                                </li>
                                <li>
                                    <button onClick={displayModalClassification} className='hover:font-bold cursor-pointer'>Classification</button>
                                    {displayClassification && <div className='border p-4 absolute bg-gray-400 rounded-xl top-1/3 right-1/3' >
                                        <span>
                                            Se site classifie les min??raux en fonction de leur famille respective, tels que les ??l??ments natifs,ou les sulfates.
                                        </span>
                                        <p onClick={displayModalClassification} className='cursor-pointer hover:font-bold'>Fermer</p>
                                    </div> }                             
                                </li>
                            </ul>
                        </div>

                    </article>
                </section>
                <section className='border h-60 rounded-3xl p-3 w-80 bg-white'>
                    <span>Familles de Min??raux</span>
                        <ul className='list-decimal list-inside mt-1 ml-5'>
                            <Link to='/Natifs'>
                                <li className='hover:font-bold cursor-pointer mb-1'>El??ment Natifs</li> 
                            </Link>
                            <Link to='/Sulfures'>
                                <li className='hover:font-bold cursor-pointer mb-1'>Sulfures et sulfosels</li>
                            </Link>
                            <Link to='/Halogenures'>
                                <li className='hover:font-bold cursor-pointer mb-1'>Halog??nures et oxydes</li>
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
                                <li className='hover:font-bold cursor-pointer'>Silicates et compos?? Organiques</li>
                            </Link>
                        </ul>
                </section>
            </div>
        </div>
    );
};

export default Home;