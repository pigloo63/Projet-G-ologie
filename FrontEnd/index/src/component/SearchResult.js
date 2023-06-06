/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchResultFamily({ name, image, familyMineral }) {
  console.log(familyMineral)
  return (
    <div key={name}>
      <Link to="">
        <article>
          <div className="border w-[300px] h-[15em]">
            {name}
            <img src={image} alt="photo minéral" className="w-[70%]" />
          </div>
        </article>
      </Link>
    </div>
  )
}
