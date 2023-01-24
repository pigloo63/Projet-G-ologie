import React, { useRef, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/authContext'

const AddMineral = () => {
  const authContext = useContext(AuthContext)

  const [family, setFamily] = useState()
  const familyInputRef = useRef()

  const [mesh, setMesh] = useState()
  const meshInputRef = useRef()

  const eclatInputRef = useRef()
  const [eclat, setEclat] = useState()

  const habitusInputRef = useRef()
  const [habitus, setHabitus] = useState()

  const opaqueInputref = useRef()
  const [opaque, setOpaque] = useState()

  const densityInputRef = useRef()
  const dureteInputRef = useRef()

  const nameInputRef = useRef()
  const descriptionInputRef = useRef()
  const colorInputRef = useRef()
  const chimicalInputref = useRef()
  const imgMineralInputRef = useRef()
  const imgMicInputRef = useRef()
  const imgDiagramInputRef = useRef()

  const submitMineral = (e) => {
    e.preventDefault()

    const enterredFamilly = familyInputRef.current.value
    const enterredMesh = meshInputRef.current.value
    const enterredEclat = eclatInputRef.current.value
    const enterredOpaque = opaqueInputref.current.value
    const enterreDensity = densityInputRef.current.valueAsNumber
    const enterredDurete = dureteInputRef.current.valueAsNumber

    const enterredName = nameInputRef.current.value
    const enterredChimical = chimicalInputref.current.value
    const enterredColor = colorInputRef.current.value
    const enterredDesciption = descriptionInputRef.current.value
    const enterredHabitus = habitusInputRef.current.value

    const enterredImgMineral = imgMineralInputRef.current.files[0]
    const enterredImgMic = imgMicInputRef.current.files[0]
    const enterredImgDiagram = imgDiagramInputRef.current.files[0]

    const formData = new FormData()

    formData.append('name', enterredName)
    formData.append('crystalMesh', enterredMesh)
    formData.append('color', enterredColor)
    formData.append('chimicalFormula', enterredChimical)
    formData.append('description', enterredDesciption)
    formData.append('family', enterredFamilly)
    formData.append('eclat', enterredEclat)
    formData.append('opacity', enterredOpaque)
    formData.append('density', enterreDensity)
    formData.append('durete', enterredDurete)
    formData.append('imgMineral', enterredImgMineral)
    formData.append('imgMic', enterredImgMic)
    formData.append('imgDiagram', enterredImgDiagram)
    formData.append('habitus', enterredHabitus)

    const url = 'http://localhost:4000/api/mineral/'

    const formSendMineral = async () => {
      try {
        const sendMineral = await fetch(url, {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'multipart/form-data',
            Authorization: `Bearer ${authContext.token}`,
          },
        })

        const dataSendMineral = await sendMineral.json()
        console.log(dataSendMineral)
      } catch (error) {
        console.log("Pas de réponse de l'API")
      }
    }
    formSendMineral()

    meshInputRef.current.value = 'vide'
    familyInputRef.current.value = 'vide'
    eclatInputRef.current.value = 'vide'
    opaqueInputref.current.value = 'vide'
  }

  return (
    <div>
      <Link to="/" className="absolute top-10 right-20">
        Page d'acceuil
      </Link>
      <section>
        <form
          className="flex flex-col w-1/2 m-auto text-center"
          onSubmit={submitMineral}
        >
          <label htmlFor="name">Nom du minéral</label>
          <input type="text" ref={nameInputRef} />
          <label htmlFor="family">Famille du minérale</label>
          <select
            value={family}
            onChange={(e) => setFamily(e.target.value)}
            ref={familyInputRef}
          >
            <option value="vide"></option>
            <option value="natifs">Eléments natifs</option>
            <option value="sulfures">Sulfures et sulfosels</option>
            <option value="halogénures">Halogénures et oxydes</option>
            <option value="carbonates">Carbonates et borates</option>
            <option value="sulfates">Sulfates</option>
            <option value="natifs">Eléments Natifs</option>
            <option value="phosphates">Phosphates</option>
            <option value="silicates">Silicates et composé organiques</option>
          </select>
          <label htmlFor="description">Description</label>
          <input type="text" ref={descriptionInputRef} />
          <label htmlFor="chimicalFormula">Formule chimique</label>
          <input type="text" ref={chimicalInputref} />
          <label htmlFor="crystalMesh">Maille cristalline</label>
          <select
            value={mesh}
            onChange={(e) => setMesh(e.target.value)}
            ref={meshInputRef}
          >
            <option value="vide"></option>
            <option value="cubique">Cubique</option>
            <option value="hexagonal">Hexagonal</option>
            <option value="rhomboedrique">Rhomboédrique</option>
            <option value="tétragonal">Tétragonal ou quadratique</option>
            <option value="orthorombique">Orthorombique</option>
            <option value="monoclinique">Monoclinique</option>
            <option value="triclinique">Triclinique</option>
          </select>
          <label htmlFor="durete">Dureté</label>
          <input
            type="number"
            min="0.5"
            max="20"
            step="0.5"
            ref={dureteInputRef}
          />
          <label htmlFor="color">Couleur du minérale</label>
          <input type="text" ref={colorInputRef} />
          <label htmlFor="eclat">Eclat</label>
          <select
            name=""
            id=""
            value={eclat}
            onChange={(e) => setEclat(e.target.value)}
            ref={eclatInputRef}
          >
            <option value="vide"></option>
            <option value="adamantin">Adamantin</option>
            <option value="vitreux">Vitreux</option>
            <option value="resineux">Résineux</option>
            <option value="nacre">Nacré</option>
            <option value="soyeux">Soyeux</option>
            <option value="gras">Gras</option>
            <option value="terreux">Terreux</option>
          </select>
          <label htmlFor="opacity">Opacité</label>
          <select
            name=""
            id=""
            value={opaque}
            onChange={(e) => setOpaque(e.target.value)}
            ref={opaqueInputref}
          >
            <option value="vide"></option>
            <option value="transparent">Transparent</option>
            <option value="semi-transparent">Semi-transparent</option>
            <option value="translucide">Translucide</option>
            <option value="non-transparent">Non-transparent</option>
            <option value="opaque">Opaque</option>
          </select>
          <label htmlFor="density">Densité</label>
          <input
            type="number"
            id="density"
            name="density"
            min="1"
            max="100"
            step="0.5"
            ref={densityInputRef}
          />
          <label htmlFor="habitus">Habitus</label>
          <select
            name=""
            id=""
            value={habitus}
            onChange={(e) => setHabitus(e.target.value)}
            ref={habitusInputRef}
          >
            <option value="vide"></option>
            <option value="ariculaire">Ariculaire</option>
            <option value="foliacé">Foliacé</option>
            <option value="botryoide">Botryoïde</option>
            <option value="dendritique">Dendritique</option>
            <option value="fibreux">Fibreux</option>
            <option value="lamellaire">Lamellaire</option>
            <option value="mamelonne">Mamelonné</option>
            <option value="massif">Massif</option>
            <option value="rayonnant">Rayonnant</option>
            <option value="reniforme">Réniforme</option>
            <option value="tabulaire">Tabulaire</option>
            <option value="bacillaire">Bacillaire</option>
          </select>
          <label htmlFor="imgMineral">Image du minérale</label>
          <input type="file" ref={imgMineralInputRef} />
          <label htmlFor="imgMic">Image au Microscope</label>
          <input type="file" ref={imgMicInputRef} />
          <label htmlFor="imgDiagramm">Image au Microscope</label>
          <input type="file" ref={imgDiagramInputRef} />
          <button type={'submit'}>Envoyer</button>
        </form>
      </section>
    </div>
  )
}

export default AddMineral
