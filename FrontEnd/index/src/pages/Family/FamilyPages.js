import React, { useEffect, useState } from 'react'
import ListOfMinerals from '../../component/MineralField/ListOfMinerals'
import SearchBar from '../../component/SearchBar'
import { useParams } from 'react-router-dom'

const FamilyPages = () => {
  let { family } = useParams()

  const [dataNatifs, setDataNatifs] = useState([])

  const [element, setElement] = useState()

  const url = `http://localhost:4000/api/mineral/${family}`

  const fetchData = async () => {
    try {
      const result = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      })

      const Result = await result.json()
      setDataNatifs(Result.result)
    } catch (error) {
      console.log("Pas de réponse de l'API")
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  function selectMineral(mineral) {
    for (let i = 0; i < dataNatifs.length; i++) {
      if (mineral.name === dataNatifs[i].name) {
        setElement(dataNatifs[i])
      }
    }
  }

  return (
    <>
      <div>
        <section className="parallax-config min-h-[40vh] bg-cover bg-fixed bg-center">
          <div className="w-full">
            <p className="text-6xl first-title absolute top-[20vh] left-[80vh]">
              {}
            </p>
          </div>
        </section>
        <div>
          <SearchBar family={'Natifs'} />
        </div>
        <div className="border rounded-3xl p-4 w-40 mt-5">
          <span className="mb-10">Les minéraux:</span>
          <ListOfMinerals
            data={dataNatifs}
            selectMineral={selectMineral}
            element={element}
          />
        </div>
      </div>
    </>
  )
}

export default FamilyPages
