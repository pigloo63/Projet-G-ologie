/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ListOfMinerals from '../../component/MineralField/ListOfMinerals'

const Carbonates = () => {
    //Appel Api pour récupérer les données des éléments Natifs
    const [dataCarbonates, setDataCarbonates] = useState([])

    const url = 'http://localhost:4000/api/mineral/Carbonates'

    const fetchData = async () => {
        try{
            const result = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json' 
                }
            })

            const Result = await result.json()
            setDataCarbonates(Result.result)

        }catch(error){
            console.log('Pas de réponse de l\'API')
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Link to='/'> <span className='cursor-pointer hover:font-bold absolute top-0 right-20 mt-10'> Page d'accueil</span></Link>
            <div>
                <div className='border rounded-3xl p-4 w-40  bg-white'>
                <span className='mb-10'>Les minéraux:</span>
                    <ListOfMinerals data={dataCarbonates}/>
                </div>
            </div>
        </>
    )
}

export default Carbonates