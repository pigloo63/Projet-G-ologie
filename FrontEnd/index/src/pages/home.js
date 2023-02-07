/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Index.css'

const Home = () => {
  return (
    <div className="">
      <section className="flex min-h-[80vh] items-center justify-center bg-fixed text-center bg-center bg-cover parallax-config">
        <h1 className="text-6xl first-title">GEOSITE</h1>
      </section>
      <section className="w-full min-h-[40vh] bg-buffer">
        <div className="text-white font-bold w-1/2 m-auto pt-[1/2] text-2xl">
          <p className="pt-[10vh]">
            Ce site aura pour objectifs de représenter et d'identifier la
            plupart des minéraux qu'il est susceptible de rencontrer dans la
            nature. Pour chaque minéral une fiche de présentation vous sera
            fournie avec toute leur propriété et photographie.
          </p>
          <p className="mt-5">
            En dessous vous trouverez toutes les grandes familles de
            classifications, qui vous permettrons d'accéder directement au
            minéraux associés à cette famille.
          </p>
        </div>
      </section>
      <section className="flex min-h-[100vh] items-center justify-center bg-fixed bg-center bg-cover parallax-config2">
        <div className="title-shaping">
          <h3>FAMILLES DE MINERAUX</h3>
        </div>
        <div className="flex flex-wrap w-[150vh] justify-around">
          <div className="bg-white h-[30vh] min-w-[30vh] flex justify-center text-center rounded-3xl mr-10 mb-[8vh]">
            <Link
              to="/Natifs"
              className="m-auto min-w-full min-h-[10vh] hover:font-bold"
            >
              <p className="justify-start mb-1">Elements Natifs</p>
              <div className="img-natifs bg-center bg-cover min-h-[20vh]"></div>
            </Link>
          </div>
          <div className="bg-white h-[30vh] min-w-[30vh] flex justify-center text-center rounded-3xl mr-10">
            <Link
              to="/Sulfures"
              className="m-auto min-w-full min-h-[10vh] hover:font-bold"
            >
              <p className="justify-start mb-1">Sulfures et sulfosels</p>
              <div className="img-sulfure bg-center bg-cover min-h-[20vh]"></div>
            </Link>
          </div>
          <div className="bg-white h-[30vh] min-w-[30vh] flex justify-center text-center rounded-3xl mr-10">
            <Link
              to="/Halogenures"
              className="m-auto min-w-full min-h-[10vh] hover:font-bold"
            >
              <p className="justify-start mb-1">Halogénures et oxydes</p>
              <div className="img-halogenure bg-center bg-cover min-h-[20vh]"></div>
            </Link>
          </div>
          <div className="bg-white h-[30vh] min-w-[30vh] flex justify-center text-center rounded-3xl">
            <Link
              to="/Carbonates"
              className="m-auto min-w-full min-h-[10vh] hover:font-bold"
            >
              <p className="justify-start mb-1">Carbonates et borates</p>
              <div className="img-carbonate bg-center bg-cover min-h-[20vh]"></div>
            </Link>
          </div>
          <div className="bg-white h-[30vh] min-w-[30vh] flex justify-center text-center rounded-3xl mr-10">
            <Link
              to="/Sulfates"
              className="m-auto min-w-full min-h-[10vh] hover:font-bold"
            >
              <p className="justify-start mb-1">Sulfates</p>
              <div className="img-oxyde bg-center bg-cover min-h-[20vh]"></div>
            </Link>
          </div>
          <div className="bg-white h-[30vh] min-w-[30vh] flex justify-center text-center rounded-3xl mr-10">
            <Link
              to="/Phosphates"
              className="m-auto min-w-full min-h-[10vh] hover:font-bold"
            >
              <p className="justify-start mb-2">Phosphates</p>
              <div className="img-phosphate bg-center bg-cover min-h-[20vh] w-[25vh] m-auto rounded-3xl"></div>
            </Link>
          </div>
          <div className="bg-white h-[30vh] min-w-[30vh] flex justify-center text-center rounded-3xl">
            <Link
              to="/Silicates"
              className="m-auto min-w-full min-h-[10vh] hover:font-bold"
            >
              <p className="justify-start mb-1">
                Silicates et composés organiques
              </p>
              <div className="img-silicate bg-center bg-cover min-h-[20vh]"></div>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full min-h-[10vh] bg-buffer"></section>
    </div>
  )
}

export default Home
