import React, { useEffect, useState } from 'react'
import ListOfMinerals from '../../component/MineralField/ListOfMinerals'
import { useParams } from 'react-router-dom'

const FamilyPages = () => {
  let { family } = useParams()

  const [data, setData] = useState([])

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
      setData(Result.result)
    } catch (error) {
      console.log("Pas de réponse de l'API")
    }
  }

  useEffect(() => {
    fetchData()
  }, [family])

  function selectMineral(mineral) {
    for (let i = 0; i < data.length; i++) {
      if (mineral.name === data[i].name) {
        setElement(data[i])
      }
    }
  }

  let title = ''
  if (family === 'natifs') {
    title = 'ELEMENTS NATIFS'
  }
  if (family === 'sulfures') {
    title = 'SULFURES ET SULFOSELS'
  }
  if (family === 'halogenures') {
    title = 'HALOGENURES ET OXYDES'
  }
  if (family === 'carbonates') {
    title = 'CARBONATES ET BORATES'
  }
  if (family === 'sulfates') {
    title = 'SULFATES'
  }
  if (family === 'phosphates') {
    title = 'PHOSPHATES'
  }
  if (family === 'silicates') {
    title = 'SILICATES ET COMPOSES ORAGNIQUES'
  }

  return (
    <>
      <div>
        <section className="parallax-config min-h-[40vh] bg-cover bg-fixed bg-center">
          <div className="w-full">
            <p className="text-6xl first-title absolute top-[17vh] left-[70vh] w-[600px] text-center">
              {title}
            </p>
          </div>
        </section>
        <div className="border rounded-3xl p-4 w-40 mt-5">
          <span className="mb-10">Les minéraux:</span>
          <ListOfMinerals
            data={data}
            selectMineral={selectMineral}
            element={element}
            family={family}
          />
        </div>
      </div>
    </>
  )
}

export default FamilyPages
