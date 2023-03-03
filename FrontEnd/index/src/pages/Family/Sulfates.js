import React, { useEffect, useState } from 'react'
import ListOfMinerals from '../../component/MineralField/ListOfMinerals'

const Sulfates = () => {
  //Appel Api pour récupérer les données des éléments Sulfates
  const [dataSulfates, setDataSulfates] = useState([])

  const url = 'http://localhost:4000/api/mineral/Sulfates'

  const fetchData = async () => {
    try {
      const result = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      })

      const Result = await result.json()
      setDataSulfates(Result.result)
    } catch (error) {
      console.log("Pas de réponse de l'API")
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div>
        <section className="parallax-config min-h-[40vh] bg-cover bg-fixed bg-center">
        <div className="w-full">
            <p className="text-6xl first-title absolute top-[21vh] left-[85vh]">
              SULFATES
            </p>
          </div>
        </section>
        <div className="border rounded-3xl p-4 w-40 mt-5">
          <span className="mb-10">Les minéraux:</span>
          <ListOfMinerals data={dataSulfates} />
        </div>
      </div>
    </>
  )
}

export default Sulfates
