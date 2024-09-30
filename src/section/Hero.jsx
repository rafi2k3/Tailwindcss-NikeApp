import React, { useState } from 'react'
import Button from '../compoents/button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constarn';
import { bigShoe1, bigShoe2 } from '../assets/images';
import ShoeCard from '../compoents/ShoeCard';


export const Hero = () => {
  const[bigshoeImg,setBigShoeImg]=useState(bigShoe1)
  return (
    <section id='home'
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen
     gap-10 max-container '>
      <div className='relative xl:w-2/5 flex-col justify-center items-start w-full 
      max-xl:padding-x pt-28 '>
        <p className='text-xl text-coral-red font-montserrat '>Our Summar Collection</p>
        <h1 className='mt-10  font-palanquin text-8xl 
        font-bold'
        > <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
        <br />
         <span className='text-coral-red mt-3 inline-block'
         >Nike </span>
         shoes </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, quality <br /> 
        comfort, and innovation for your active life.</p>
        <Button  label="Shop Now"
        iconURL={arrowRight}/>
        <div className='flex justify-start  iemts-start flex-wrap w-full mt-20 gap-16 '>
          {statistics.map((stat)=>(
             <div key={stat.label}>
              <p className='text-4xl font-palanquin' >{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
             </div>
          ))}
        </div>
        </div>
        <div className=' relative flex-1 flex justify/-center items-center xl:min-h-screen 
        max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
          
          <img src={bigShoe1} alt="Shoe collection"
        width={610} 
        height={500}
        className='object-contain relative z-10'/>
         
      <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%]' >
        {shoes.map((shoe)=>(
          <div key={shoe}>
            <ShoeCard imgURL={shoe}
             changeBigShoeImage ={(shoe)=>setBigShoeImg(shoe)}
             bigShoeImg={bigshoeImg}/>
          </div>
        ))}
      </div>
      </div>
      
     </section>
  )
}
export default Hero;
