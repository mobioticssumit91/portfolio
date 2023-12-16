'use server'
import Image from 'next/image'
import Listing from '../listing'
import { userStore } from '../../../../zustand/user'
import { localDB } from '../../../../zustand/db'

async function fetchflim() {
  const flimResponse = await fetch("https://pineapple-tree-default-rtdb.firebaseio.com/v1/trending.json", {
    // cache: "force-cache", ///< SSG getStaticSideProps
    cache: "no-store", ///< SSR getServerSideProps
    // next: {
    //   revalidate: 20, ///< ISR revalidate
    // },
  });

  // await wait(4000);

  console.log("fetching flim");

  return flimResponse.json();
}

export default async function Trending (props: any) {
  const flim = await fetchflim();
  console.log(  "=====",   userStore.getState().user)
  console.log("age====", localDB.age)
  
  return (
  <section>
    <div>Trending</div>
   <Listing flim={flim.results}></Listing>
  </section>
  )
}
