import React from 'react'
import MineralField from '../../component/MineralField/MineralField'

const ListOfMinerals = ({ data, selectMineral, element, family }) => {
  return (
    <>
      <div className="flex">
        <div>
          {data.map((mineral) => (
            <div key={mineral.id}>
              <ul className="ml-10 mt-2 list-disc w-auto">
                <li
                  className="cursor-pointer hover:font-bold"
                  onClick={() => selectMineral(mineral)}
                >
                  {mineral.name}
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div>
          <MineralField elementMineral={element} family={family} />
        </div>
      </div>
    </>
  )
}

export default ListOfMinerals
