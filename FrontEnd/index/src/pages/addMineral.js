import React, { useState, useContext } from 'react'
import AuthContext from '../context/authContext'
import { useForm } from 'react-hook-form'

const AddMineral = () => {
  const authContext = useContext(AuthContext)

  const { register, handleSubmit, resetField } = useForm()

  const [family, setFamily] = useState()

  const [mesh, setMesh] = useState()

  const [eclat, setEclat] = useState()

  const [habitus, setHabitus] = useState()

  const [opaque, setOpaque] = useState()


  const submitMineral = (data) => {
    console.log(data)

    const familly = data.family
    const mesh = data.mesh
    const eclat = data.eclat
    const opacity = data.opacity
    const density = data.density
    const durete = data.durete

    const name = data.name
    const chimical = data.chimical
    const color = data.color
    const desciption = data.description
    const habitus = data.habitus

    const image = data.image[0]

    const formData = new FormData()

    formData.append('name', name)
    formData.append('crystalMesh', mesh)
    formData.append('color', color)
    formData.append('chimicalFormula', chimical)
    formData.append('description', desciption)
    formData.append('family', familly)
    formData.append('eclat', eclat)
    formData.append('opacity', opacity)
    formData.append('density', density)
    formData.append('durete', durete)
    formData.append('image', image)
    formData.append('habitus', habitus)

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
        resetField('name')
        resetField('family')
        resetField('description')
        resetField('chimical')
        resetField('mesh')
        resetField('durete')
        resetField('color')
        resetField('eclat')
        resetField('opacity')
        resetField('density')
        resetField('habitus')
        resetField('image')
      } catch (error) {
        console.log("Pas de réponse de l'API")
      }
    }
    formSendMineral()
  }

  return (
    <div>
      <section className="parallax-config min-h-[95vh] bg-center bg-fixed bg-cover w-1/2">
        <div className="w-[80vh] m-auto max-h-[90vh] relative top-[10vh] left-[100vh]">
          <form
            className="flex flex-col text-center p-5 w-[75%] m-auto "
            onSubmit={handleSubmit(submitMineral)}
          >
            <label htmlFor="name">Nom du minéral</label>
            <input
              type="text"
              name="name"
              id="name"
              {...register('name', {
                required: 'Champs requis',
              })}
            />
            <label htmlFor="family">Famille du minérale</label>
            <select
              value={family}
              onChange={(e) => setFamily(e.target.value)}
              name="family"
              id="family"
              {...register('family', {
                required: 'Champs requis',
              })}
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
            <input
              type="text"
              {...register('description', {
                required: 'Champs requis',
              })}
            />
            <label htmlFor="chimicalFormula">Formule chimique</label>
            <input
              type="text"
              name="chimical"
              {...register('chimical', {
                required: 'Champs requis',
              })}
            />
            <label htmlFor="mesh">Maille cristalline</label>
            <select
              value={mesh}
              onChange={(e) => setMesh(e.target.value)}
              name="mesh"
              id="mesh"
              {...register('mesh', {
                required: 'Champs requis',
              })}
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
              name="durete"
              id="durete"
              {...register('durete', {
                required: 'Champs requis',
              })}
            />
            <label htmlFor="color">Couleur du minérale</label>
            <input
              type="text"
              {...register('color', {
                required: 'Champs requis',
              })}
            />
            <label htmlFor="eclat">Eclat</label>
            <select
              name="eclat"
              id="eclat"
              value={eclat}
              onChange={(e) => setEclat(e.target.value)}
              {...register('eclat', {
                required: 'Champs requis',
              })}
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
              name="opacity"
              id="opcity"
              value={opaque}
              onChange={(e) => setOpaque(e.target.value)}
              {...register('opacity', {
                required: 'Champs requis',
              })}
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
              {...register('density', {
                required: 'Champs requis',
              })}
            />
            <label htmlFor="habitus">Habitus</label>
            <select
              name="habitus"
              id="habitus"
              value={habitus}
              onChange={(e) => setHabitus(e.target.value)}
              {...register('habitus', {
                required: 'Champs requis',
              })}
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
            <input
              type="file"
              name="image"
              id="image"
              {...register('image', {
                required: 'Champs requis',
              })}
            />
            <button type={'submit'}>Envoyer</button>
          </form>
        </div>
      </section>
      <section className="w-full h-[5vh] bg-buffer"></section>
    </div>
  )
}

export default AddMineral
