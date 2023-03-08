/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'


const FamilyLink = ({ link, family, picture }) => {
  return (
    <>
      <Link
        to={link}
        className="m-auto min-w-full min-h-[10vh] hover:font-bold"
      >
        <p className="justify-start mb-1">{family}</p>
        <div>
          <img
            src={picture}
            alt="picture of mineral"
            className="h-[20vh] bg- bg-center bg-cover min-h-[20vh] w-full"
          />
        </div>
      </Link>
    </>
  )
}

export default FamilyLink
