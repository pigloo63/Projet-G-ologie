/* eslint-disable no-unused-vars */
import React from 'react'
import FamilyLink from '../component/FamilyLink'
import '../css/Index.css'
import imgNatifs from '../images/depositphotos_2849702-stock-photo-native-copper.png'
import imgSulfures from '../images/quartz-avec-des-sulfures-sur-un-fond-blanc-69195930.jpg'
import imgHalogénures from '../images/depositphotos_170738452-stock-photo-partially-polished-rainbow-fluorite-with.png'
import imgCarbonates from '../images/depositphotos_44065701-stock-photo-malachite-and-azurite-minerals.png'
import imgSulfates from '../images/chalcedony-gf8b72d013_1280.jpg'
import imgPhosphates from '../images/istockphoto-179245354-612x612.jpg'
import imgSilicates from '../images/depositphotos_24267087-stock-photo-natural-pyrope-garnet-minerals-gems.png'

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
            <FamilyLink
              family={'Elements natifs'}
              link={'/natifs'}
              picture={imgNatifs}
            />
          </div>
          <div className="bg-white h-[30vh] min-w-[30vh] flex justify-center text-center rounded-3xl mr-10">
            <FamilyLink
              family={'Sulfures et Sulfosels'}
              link={'/Sulfures'}
              picture={imgSulfures}
            />
          </div>
          <div className="bg-white h-[30vh] min-w-[30vh] flex justify-center text-center rounded-3xl mr-10">
            <FamilyLink
              family={'Halogénures et oxydes'}
              link={'/Halogenures'}
              picture={imgHalogénures}
            />
          </div>
          <div className="bg-white h-[30vh] min-w-[30vh] flex justify-center text-center rounded-3xl">
            <FamilyLink
              family={'Carbonates et borates'}
              link={'/Carbonates'}
              picture={imgCarbonates}
            />
          </div>
          <div className="bg-white h-[30vh] min-w-[30vh] flex justify-center text-center rounded-3xl mr-10">
            <FamilyLink
              family={'Sulfates'}
              link={'/Sulfates'}
              picture={imgSulfates}
            />
          </div>
          <div className="bg-white h-[30vh] min-w-[30vh] flex justify-center text-center rounded-3xl mr-10">
            <FamilyLink
              family={'Phosphates'}
              link={'/Phosphates'}
              picture={imgPhosphates}
            />
          </div>
          <div className="bg-white h-[30vh] min-w-[30vh] flex justify-center text-center rounded-3xl">
            <FamilyLink
              family={'Silicates et composés organiques'}
              link={'/Silicates'}
              picture={imgSilicates}
            />
          </div>
        </div>
      </section>
      <section className="w-full min-h-[10vh] bg-buffer"></section>
    </div>
  )
}

export default Home
