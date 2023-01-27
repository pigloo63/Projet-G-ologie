import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Index.css'

const Home = () => {
  const [displayHabitus, setDisplayHabitus] = useState(false)
  const [displayEclat, setDisplayEclat] = useState(false)
  const [displayColor, setDisplayColor] = useState(false)
  const [displayDurete, setDisplayDurete] = useState(false)
  const [displayOpacity, setDisplayOpacity] = useState(false)
  const [displayDensity, setDisplayDensity] = useState(false)
  const [displaySystem, setDisplaySystem] = useState(false)
  const [displayClassification, setDisplayClassification] = useState(false)

  function displayModal(
    display,
    setDisplay,
    setDisplayFalse1,
    setDisplayFalse2,
    setDisplayFalse3,
    setDisplayFalse4,
    setDisplayFalse5,
    setDisplayFalse6,
    setDisplayFalse7
  ) {
    if (display === false) {
      setDisplay(true)
      setDisplayFalse1(false)
      setDisplayFalse2(false)
      setDisplayFalse3(false)
      setDisplayFalse4(false)
      setDisplayFalse5(false)
      setDisplayFalse6(false)
      setDisplayFalse7(false)
    } else {
      setDisplay((open) => !open)
    }
  }

  return (
    <div className="ml-[200px]">
      <div className="flex w-auto">
        <section className="border p-6 rounded-3xl mr-10 bg-white">
          <article>
            <span>
              Ce site aura pour objectifs de représenter et d'identifier la
              plupart des minéraux qu'il est susceptible de rencontrer dans la
              nature.
              <br />
              Chaque minéral aurra donc ca propre fiche afin que vous puissiez
              avoir toutes les informations nécessaires en un clin d'oeil.
            </span>
            <div className="mt-5">
              <p>
                Afin de classer ces minéraux, plusieurs propriété sont utilisées
                :
              </p>
              <ul className="list-disc list-inside mt-5 ml-6">
                <li className="mb-3">
                  <button
                    onClick={() =>
                      displayModal(
                        displayColor,
                        setDisplayColor,
                        setDisplayClassification,
                        setDisplayDensity,
                        setDisplayDurete,
                        setDisplayEclat,
                        setDisplayHabitus,
                        setDisplayOpacity,
                        setDisplaySystem
                      )
                    }
                    className="cursor-pointer hover:font-bold"
                    id="displayColor"
                  >
                    La couleur
                  </button>
                  {displayColor && (
                    <div className="border p-4 absolute bg-gray-400 rounded-xl top-1/3 w-1/3 left-1/3">
                      <span>
                        La couleur s'avère utile si elle permet de caractérisé
                        spécifiquement un minéral. Cependant, la couleur peut
                        varier en fonction de l'impureté d'un minéral.
                      </span>
                      <p
                        onClick={() =>
                          displayModal(
                            displayColor,
                            setDisplayColor,
                            setDisplayClassification,
                            setDisplayDensity,
                            setDisplayDurete,
                            setDisplayEclat,
                            setDisplayHabitus,
                            setDisplayOpacity,
                            setDisplaySystem
                          )
                        }
                        className="cursor-pointer hover:font-bold mt-2"
                        id="displayColorClose"
                      >
                        Fermer
                      </p>
                    </div>
                  )}
                </li>
                <li className="mb-3">
                  <button
                    className="cursor-pointer hover:font-bold"
                    id="displayEclat"
                    onClick={() =>
                      displayModal(
                        displayEclat,
                        setDisplayEclat,
                        setDisplayClassification,
                        setDisplayDensity,
                        setDisplayDurete,
                        setDisplayColor,
                        setDisplayHabitus,
                        setDisplayOpacity,
                        setDisplaySystem
                      )
                    }
                  >
                    L'éclat
                  </button>
                  {displayEclat && (
                    <div className="border p-4 absolute bg-gray-400 rounded-xl w-1/3 top-1/3 right-1/2 left-1/3">
                      <span>
                        L'éclat décrit l'aspect d'une face cristalline en
                        lumière réfléchie. Les minéraux opaque, comme les métaux
                        et nombre de sulfures, ont un éclat métallique;
                        imparfait, l'éclat est semi-métallique. Le terme
                        générique d'éclat non métallique s'applique à tout le
                        reste, dont les minéraux transparents et translucides.
                        Il inlclut :
                      </span>
                      <ul className="list-disc list-inside mt-2">
                        <li className="mb-1">Adamantin: Hautement réfléchie</li>
                        <li className="mb-1">Vitreux: Comme le quarts</li>
                        <li className="mb-1">
                          Résineux: Comme la résine ou l'ambre
                        </li>
                        <li className="mb-1">Nacré: Comme la perle</li>
                        <li className="mb-1">
                          Soyeux: Dû à une structure fibreuse sous-jacente
                        </li>
                        <li className="mb-1">
                          Gras: Produit par une surface irréguliére
                        </li>
                        <li className="mb-1">
                          Terreux ou terne: Surface mate des minéraux épourvus
                          d'éclat
                        </li>
                        <p
                          onClick={() =>
                            displayModal(
                              displayEclat,
                              setDisplayEclat,
                              setDisplayClassification,
                              setDisplayDensity,
                              setDisplayDurete,
                              setDisplayColor,
                              setDisplayHabitus,
                              setDisplayOpacity,
                              setDisplaySystem
                            )
                          }
                          className="hover:font-bold cursor-pointer mt-2"
                          id="displayEclatClose"
                        >
                          Fermer
                        </p>
                      </ul>
                    </div>
                  )}
                </li>
                <li className="mb-3">
                  <button
                    onClick={() =>
                      displayModal(
                        displayOpacity,
                        setDisplayColor,
                        setDisplayClassification,
                        setDisplayDensity,
                        setDisplayDurete,
                        setDisplayEclat,
                        setDisplayHabitus,
                        setDisplayOpacity,
                        setDisplaySystem
                      )
                    }
                    id="displyOpacity"
                    className="cursor-pointer hover:font-bold"
                  >
                    Opacité ou Transparence
                  </button>
                  {displayOpacity && (
                    <div className="border p-4 absolute bg-gray-400 rounded-xl top-1/3 right-1/3">
                      <span>
                        La quantité de lumière absorbée détermine si un minéral
                        est transparent, translucide ou opaque.
                      </span>
                      <p
                        onClick={() =>
                          displayModal(
                            displayOpacity,
                            setDisplayOpacity,
                            setDisplayClassification,
                            setDisplayDensity,
                            setDisplayDurete,
                            setDisplayEclat,
                            setDisplayHabitus,
                            setDisplayColor,
                            setDisplaySystem
                          )
                        }
                        className="hover:font-bold cursor-pointer mt-2"
                        id="displayOpacityClose"
                      >
                        Fermer
                      </p>
                    </div>
                  )}
                </li>
                <li className="mb-3">
                  <button
                    onClick={() =>
                      displayModal(
                        displayDurete,
                        setDisplayDurete,
                        setDisplayClassification,
                        setDisplayDensity,
                        setDisplayColor,
                        setDisplayEclat,
                        setDisplayHabitus,
                        setDisplayOpacity,
                        setDisplaySystem
                      )
                    }
                    className="cursor-pointer hover:font-bold"
                    id="displayDurete"
                  >
                    La dureté:
                  </button>
                  {displayDurete && (
                    <div className="border p-4 absolute bg-gray-400 rounded-xl top-1/3 right-1/3">
                      <span>
                        La dureté d'un minéral est définie comme la résitance à
                        l'abrasion ou à la rayure. On utilise pour ceci
                        l'échelle de Mohs.
                      </span>
                      <p
                        onClick={() =>
                          displayModal(
                            displayDurete,
                            setDisplayDurete,
                            setDisplayClassification,
                            setDisplayDensity,
                            setDisplayColor,
                            setDisplayEclat,
                            setDisplayHabitus,
                            setDisplayOpacity,
                            setDisplaySystem
                          )
                        }
                        className="hover:font-bold cursor-pointer mt-2"
                        id="displayDureteClose"
                      >
                        Fermer
                      </p>
                    </div>
                  )}
                </li>
                <li className="mb-3">
                  <button
                    onClick={() =>
                      displayModal(
                        displayDensity,
                        setDisplayDensity,
                        setDisplayClassification,
                        setDisplayColor,
                        setDisplayDurete,
                        setDisplayEclat,
                        setDisplayHabitus,
                        setDisplayOpacity,
                        setDisplaySystem
                      )
                    }
                    className="hover:font-bold cursor-pointer"
                    id="displayDensity"
                  >
                    La Densité spécifique
                  </button>
                  {displayDensity && (
                    <div className="border p-4 absolute bg-gray-400 rounded-xl top-1/3 right-1/3">
                      <span>
                        La masse volumique d'un minéral est calculée en divisant
                        sont poid par son volume. Elle s'exprime en g/cm3.
                      </span>
                      <p
                        onClick={() =>
                          displayModal(
                            displayDensity,
                            setDisplayDensity,
                            setDisplayClassification,
                            setDisplayColor,
                            setDisplayDurete,
                            setDisplayEclat,
                            setDisplayHabitus,
                            setDisplayOpacity,
                            setDisplaySystem
                          )
                        }
                        className="hover:font-bold cursor-pointer mt-2"
                        id="displyDensityClose"
                      >
                        Fermer
                      </p>
                    </div>
                  )}
                </li>
                <li className="mb-3">
                  <button
                    onClick={() =>
                      displayModal(
                        displayHabitus,
                        setDisplayHabitus,
                        setDisplayClassification,
                        setDisplayDensity,
                        setDisplayDurete,
                        setDisplayEclat,
                        setDisplayColor,
                        setDisplayOpacity,
                        setDisplaySystem
                      )
                    }
                    className="hover:font-bold cursor-pointer"
                    id="displayHabitus"
                  >
                    Habitus et Forme
                  </button>
                  {displayHabitus && (
                    <div className="border p-4 absolute bg-gray-400 rounded-xl top-1/4 right-1/3 left-1/4">
                      L'habitus est l'ensemble des caractériqtique externes d'un
                      minéral, autrement dis ses formes cristallines et la
                      manières dont ces formes se combinent. On distincte 12
                      habitus et forme: <br />
                      <ul className="list-disc list-inside mt-2">
                        <li className="mb-1">
                          Ariculaire: en forme d'aiguille
                        </li>
                        <li className="mb-1">
                          Foliacé: aplati comme la lame d'un couteau
                        </li>
                        <li className="mb-1">Botryoïde: en grappe</li>
                        <li className="mb-1">
                          Dendritique: arboré ou ramifié comme l mousse
                        </li>
                        <li className="mb-1">Fibreux: fils fins</li>
                        <li className="mb-1">
                          Lamellaire: formant des feuilles plates distinctes
                        </li>
                        <li className="mb-1">
                          Mamelonné: masses arrondie intéférant les unes abev
                          les autres
                        </li>
                        <li className="mb-1">Massifs: sans forme distincte</li>
                        <li className="mb-1">
                          Rayonnant: disposition radiale des aiguilles ou de
                          fibres
                        </li>
                        <li className="mb-1">Réniforme: en forme de haricot</li>
                        <li className="mb-1">
                          Tabulaire: montrant des surface plate et larges
                        </li>
                        <li className="mb-1">Bacillaire: en forme de bâton</li>
                        <p
                          onClick={() =>
                            displayModal(
                              displayHabitus,
                              setDisplayHabitus,
                              setDisplayClassification,
                              setDisplayDensity,
                              setDisplayDurete,
                              setDisplayEclat,
                              setDisplayColor,
                              setDisplayOpacity,
                              setDisplaySystem
                            )
                          }
                          className="cursor-pointer hover:font-bold mt-3"
                        >
                          Fermer
                        </p>
                      </ul>
                    </div>
                  )}
                </li>
                <li className="mb-3">
                  <button
                    onClick={() =>
                      displayModal(
                        displaySystem,
                        setDisplaySystem,
                        setDisplayClassification,
                        setDisplayDensity,
                        setDisplayDurete,
                        setDisplayEclat,
                        setDisplayHabitus,
                        setDisplayOpacity,
                        setDisplayColor
                      )
                    }
                    className="hover:font-bold cursor-pointer"
                  >
                    Sytème Cristallin
                  </button>
                  {displaySystem && (
                    <div className="border p-4 absolute bg-gray-400 rounded-xl top-1/3 right-1/4 w-1/2">
                      <span>
                        La cristallographie décrit la forme et la smétrie des
                        cristaux, leur structure interne et leur
                        caractériqtiques chimiques et physiques associées. Sept
                        système critallin existent, chacun comportant un nombre
                        de forme cristallines - ensemble des faces résultant de
                        l'action sur une seule face de tous les éléments de
                        symétrie du cristal. Certaines formes cristallines sont
                        typiques d'un sytème, tel que le cube pour le système
                        cubique, l'authentification d'autre exige des mesures
                        spécialisées.
                      </span>
                      <p
                        onClick={() =>
                          displayModal(
                            displaySystem,
                            setDisplaySystem,
                            setDisplayClassification,
                            setDisplayDensity,
                            setDisplayDurete,
                            setDisplayEclat,
                            setDisplayHabitus,
                            setDisplayOpacity,
                            setDisplayColor
                          )
                        }
                        className="cursor-pointer hover:font-bold mt-3"
                      >
                        Fermer
                      </p>
                    </div>
                  )}
                </li>
                <li>
                  <button
                    onClick={() =>
                      displayModal(
                        displayClassification,
                        setDisplayClassification,
                        setDisplayColor,
                        setDisplayDensity,
                        setDisplayDurete,
                        setDisplayEclat,
                        setDisplayHabitus,
                        setDisplayOpacity,
                        setDisplaySystem
                      )
                    }
                    className="hover:font-bold cursor-pointer"
                  >
                    Classification
                  </button>
                  {displayClassification && (
                    <div className="border p-4 absolute bg-gray-400 rounded-xl top-1/3 right-1/3">
                      <span>
                        Se site classifie les minéraux en fonction de leur
                        famille respective, tels que les éléments natifs,ou les
                        sulfates.
                      </span>
                      <p
                        onClick={() =>
                          displayModal(
                            displayClassification,
                            setDisplayClassification,
                            setDisplayColor,
                            setDisplayDensity,
                            setDisplayDurete,
                            setDisplayEclat,
                            setDisplayHabitus,
                            setDisplayOpacity,
                            setDisplaySystem
                          )
                        }
                        className="cursor-pointer hover:font-bold mt-3"
                      >
                        Fermer
                      </p>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </article>
        </section>
        <section className="border h-60 rounded-3xl p-3 w-80 bg-white">
          <span>Familles de Minéraux</span>
          <ul className="list-decimal list-inside mt-1 ml-5">
            <Link to="/Natifs">
              <li className="hover:font-bold cursor-pointer mb-1">
                Elément Natifs
              </li>
            </Link>
            <Link to="/Sulfures">
              <li className="hover:font-bold cursor-pointer mb-1">
                Sulfures et sulfosels
              </li>
            </Link>
            <Link to="/Halogenures">
              <li className="hover:font-bold cursor-pointer mb-1">
                Halogénures et oxydes
              </li>
            </Link>
            <Link to="/Carbonates">
              <li className="hover:font-bold cursor-pointer mb-1">
                Carbonates et borates
              </li>
            </Link>
            <Link to="/Sulfates">
              <li className="hover:font-bold cursor-pointer mb-1">Sulfates</li>
            </Link>
            <Link to="/Phosphates">
              <li className="hover:font-bold cursor-pointer mb-1">
                Phosphates
              </li>
            </Link>
            <Link to="/Silicates">
              <li className="hover:font-bold cursor-pointer">
                Silicates et composé Organiques
              </li>
            </Link>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Home
