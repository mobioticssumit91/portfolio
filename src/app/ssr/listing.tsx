'use client'
import Image from 'next/image'
import React, { useState, useEffect  } from 'react'; 

export default function Listing(props: any) {
  let { flim } = props

  return (
    <div className='grid grid-cols-6 3xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2	gap-1'>
     
        {
         
         flim.length == 0 ? (<h1 className='text-xl text-white'>LOADING .....</h1>) : flim.map((item: any, index: number) => {
              return (
                <div className='w-30' key={index}> <Image alt={item.poster_path} src={'https://image.tmdb.org/t/p/w500' + item.poster_path} 
                loading="lazy" width={200} height={300}/> <div className='text-blue-200'>  { item.title } </div></div>
              )   
          })
        }
    </div>
  )
}
