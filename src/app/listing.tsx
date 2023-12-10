'use client'
import Image from 'next/image'
import React, { useState, useEffect  } from 'react'; 

export default function Listing(props: any) {
    const [count, setCount] = useState([]); // <--- useState is the hook

    useEffect(() => {
        callAPI(props.typeSection);
    },[props.typeSection])
    console.log(props.typeSection)
    const callAPI = async (typeSection: string) => {
      let url = ""
      if (typeSection == 'Trending') {
        typeSection = 'https://pineapple-tree-default-rtdb.firebaseio.com/v1/trending.json'
      } else  if (typeSection == 'Genres') {
        typeSection = 'https://pineapple-tree-default-rtdb.firebaseio.com/v1/genres.json'
      } else {
        typeSection = `https://pineapple-tree-default-rtdb.firebaseio.com/v1/movie.json`
      }
		try {
			const res = await fetch(
				typeSection, {
          next: {
            revalidate: 10
          }
        }
			);
			const data = await res.json();
			setCount(data.results)
		} catch (err) {
			console.log(err);
		}
	};
  return (
    <div className='grid grid-cols-6 3xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2	gap-1'>
     
        {
         
         count.length == 0 ? (<h1 className='text-xl text-white'>LOADING .....</h1>) : count.map((item, index) => {
              return (
                <div className='w-30' key={index}> <img src={'https://image.tmdb.org/t/p/w500' + item.poster_path} /> <div className='text-blue-200'>  { item.title } </div></div>
              )   
          })
        }
    </div>
  )
}
