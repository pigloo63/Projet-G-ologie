import React, { useState, useEffect } from 'react'
import ListOfMinerals from '../../component/MineralField/ListOfMinerals'

const Sulfures = () => {
  //Appel Api pour récupérer les données des éléments Sulfures
  const [dataSulfures, setDataSulfures] = useState([])

  const url = 'http://localhost:4000/api/mineral/Sulfures'

  const fetchData = async () => {
    try {
      const result = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      })

      const Result = await result.json()
      setDataSulfures(Result.result)
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
        <section className="parallax-config min-h-[35vh] bg-cover bg-fixed bg-center">
          <div className="w-full">
            <p className="text-6xl first-title absolute top-[15vh] left-[72vh]">
              SULFURES ET SULFOSELS
            </p>
          </div>
        </section>
        <div className="border rounded-3xl p-4 w-40 mt-5">
          <span className="mb-10 font-bold">Les minéraux:</span>
          <ListOfMinerals data={dataSulfures} />
        </div>
      </div>
    </>
  )
}

export default Sulfures
