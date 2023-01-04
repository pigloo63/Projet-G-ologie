import React from 'react';

const ListOfMinerals = ({data}) => {


    return (
        <div>
             {data.map(mineral => (
                        <div key={mineral.id}>
                            <ul className='ml-10 mt-2 list-disc'>
                                <li className='cursor-pointer hover:font-bold'>{mineral.name}</li>
                            </ul>
                        </div>
                    ))}
        </div>
    )
}

export default ListOfMinerals;