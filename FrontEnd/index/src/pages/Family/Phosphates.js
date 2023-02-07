import React, { useState, useEffect } from 'react'
import ListOfMinerals from '../../component/MineralField/ListOfMinerals'

const Phosphates = () => {
  //Appel Api pour récupérer les données des éléments Phosphates
  const [dataPhosphates, setDataPhosphates] = useState([])

  const url = 'http://localhost:4000/api/mineral/Phosphates'

  const fetchData = async () => {
    try {
      const result = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      })

      const Result = await result.json()
      setDataPhosphates(Result.result)
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
        <section className="parallax-config min-h-[30vh] bg-cover bg-fixed bg-center">
          <div className="w-full">
            <p className="text-6xl first-title absolute top-[15vh] left-[85vh]">
              PHOSPHATES
            </p>
          </div>
        </section>
        <div className="border rounded-3xl p-4 w-40 mt-5">
          <span className="mb-10">Les minéraux:</span>
          <ListOfMinerals data={dataPhosphates} />
        </div>
      </div>
    </>
  )
}

export default Phosphates
