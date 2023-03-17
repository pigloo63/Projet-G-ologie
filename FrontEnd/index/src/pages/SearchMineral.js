import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const SearchBar = () => {
  const { register, handleSubmit } = useForm()

  const [searchResultFind, setSearchResultFind] = useState()
  const [family, setFamily] = useState()

  console.log(searchResultFind)

  const onSubmit = (data, e) => {
    e.preventDefault()

    const searchResult = data.searchResult
    console.log(searchResult)
    const familyMineral = data.family
    console.log(familyMineral)

    let url = ''

    if (familyMineral === 'vide') {
      url = `http://localhost:4000/api/mineral/find/${searchResult}`
    }
    if (!searchResult) {
      url = `http://localhost:4000/api/mineral/find/name/${familyMineral}`
    }
    if (familyMineral !== 'vide' && searchResult) {
      url = `http://localhost:4000/api/mineral/${familyMineral}/${searchResult}`
    }

    console.log(url)

    const fetchSearchMineral = async () => {
      try {
        const result = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        })

        const Result = await result.json()
        setSearchResultFind(Result.result)
      } catch (err) {
        console.log("Le minéral n'es pas dans la BDD")
      }
    }
    fetchSearchMineral()
  }

  return (
    <>
      <section className="parallax-config min-h-[40vh] bg-cover bg-fixed bg-center">
        <div className="w-full">
          <p className="text-6xl first-title absolute top-[17vh] left-[70vh] w-[600px] text-center">
            RECHERCHE
          </p>
        </div>
      </section>
      <section>
        <div className="flex flex-col w-[10%]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Nom</label>
            <input
              className="border"
              type="search"
              name="searchBar"
              id="searchBar"
              {...register(
                'searchResult' //, {
                //   required: true,
                // }
              )}
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
            <button type={'submit'}>Rechercher</button>
          </form>
        </div>
      </section>
      <section>
        <div>
          <p>Résutat</p>
          {<div></div>}
        </div>
      </section>
    </>
  )
}

export default SearchBar
