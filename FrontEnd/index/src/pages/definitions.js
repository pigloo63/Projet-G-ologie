import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Definitions = () => {
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
    <div>
      <section className="parallax-config min-h-[40vh] bg-cover bg-center bg-fixed flex justify-center text-center items-center">
        <h2 className="text-4xl first-title">Propriétés minéralogique</h2>
      </section>
      <section className="p-6 mr-10 h-[55vh]">
        <article>
          <p>
            Ici vous trouverez quelques définition afin de comprendre les
            détails de chaques fiches minéralogiques.
          </p>
          <div className="mt-5">
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
                  <div className="absolute left-1/3 top-[45vh]">
                    <FontAwesomeIcon
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
                      icon={faXmark}
                      className="cursor-pointer mb-10 relative left-full"
                      size="lg"
                    />
                    <span>
                      La couleur s'avère utile si elle permet de caractérisé
                      spécifiquement un minéral. Cependant, la couleur peut
                      varier en fonction de l'impureté d'un minéral.
                    </span>
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
                  <div className="absolute left-1/3 top-[45vh]">
                    <FontAwesomeIcon
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
                      icon={faXmark}
                      className="cursor-pointer mb-10 relative left-full"
                      size="lg"
                    />
                    <p className="mb-5">
                      L'éclat décrit l'aspect d'une face cristalline en lumière
                      réfléchie. Les minéraux opaque, comme les métaux et nombre
                      de sulfures, ont un éclat métallique; imparfait, l'éclat
                      est semi-métallique. <br /> Le terme générique d'éclat non
                      métallique s'applique à tout le reste, dont les minéraux
                      transparents et translucides. Il inlclut :
                    </p>
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
                    </ul>
                  </div>
                )}
              </li>
              <li className="mb-3">
                <button
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
                  id="displyOpacity"
                  className="cursor-pointer hover:font-bold"
                >
                  Opacité ou Transparence
                </button>
                {displayOpacity && (
                  <div className="absolute left-1/3 top-[45vh]">
                    <FontAwesomeIcon
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
                      icon={faXmark}
                      className="cursor-pointer mb-5 relative left-full"
                      size="lg"
                    />
                    <p>
                      La quantité de lumière absorbée détermine si un minéral
                      est transparent, translucide ou opaque.
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
                  <div className="absolute left-1/3 top-1/2">
                    <FontAwesomeIcon
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
                      icon={faXmark}
                      className="cursor-pointer mb-5 relative left-full"
                      size="lg"
                    />
                    <p>
                      La dureté d'un minéral est définie comme la résitance à
                      l'abrasion ou à la rayure. On utilise pour ceci l'échelle
                      de Mohs.
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
                  <div className="absolute left-1/3 top-1/2">
                    <FontAwesomeIcon
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
                      icon={faXmark}
                      className="cursor-pointer mb-5 relative left-full"
                      size="lg"
                    />
                    <p>
                      La masse volumique d'un minéral est calculée en divisant
                      sont poid par son volume. Elle s'exprime en g/cm3.
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
                  <div className="absolute left-1/3 top-[45vh]">
                    <FontAwesomeIcon
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
                      icon={faXmark}
                      className="cursor-pointer mb-5 relative left-full"
                      size="lg"
                    />
                    <p className="mb-5">
                      L'habitus est l'ensemble des caractériqtique externes d'un
                      minéral, autrement dis ses formes cristallines et la
                      manières dont ces formes se combinent. On distincte 12
                      habitus et forme:
                    </p>
                    <ul className="list-disc list-inside mt-2">
                      <li className="mb-1">Ariculaire: en forme d'aiguille</li>
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
                        Mamelonné: masses arrondie intéférant les unes abev les
                        autres
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
                  <div className="absolute left-1/3 top-[45vh]">
                    <FontAwesomeIcon
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
                      icon={faXmark}
                      className="cursor-pointer mb-10 relative left-full"
                      size="lg"
                    />
                    <p>
                      La cristallographie décrit la forme et la smétrie des
                      cristaux, leur structure interne et leur caractéristiques
                      chimiques et physiques associées.
                      <br /> Sept système critallin existent, chacun comportant
                      un nombre de forme cristallines - ensemble des faces
                      résultant de l'action sur une seule face de tous les
                      éléments de symétrie du cristal. <br />
                      Certaines formes cristallines sont typiques d'un sytème,
                      tel que le cube pour le système cubique,
                      l'authentification d'autre exige des mesures spécialisées.
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
                  <div className="absolute left-1/3 top-1/2">
                    <FontAwesomeIcon
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
                      icon={faXmark}
                      className="cursor-pointer mb-5 relative left-full"
                      size="lg"
                    />
                    <p>
                      Se site classifie les minéraux en fonction de leur famille
                      respective, tels que les éléments natifs,ou les sulfates.
                    </p>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </article>
      </section>
      <section className="w-full h-[5vh] bg-buffer"></section>
    </div>
  )
}

export default Definitions
