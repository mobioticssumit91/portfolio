'use server'
import Image from 'next/image'
import Listing from '../listing'
import { getServerSession } from 'next-auth';

async function fetchflim() {
  const session = await getServerSession();


  console.log(session, "token=========")
  const flimResponse = await fetch("https://pineapple-tree-default-rtdb.firebaseio.com/v1/genres.json", {
    // cache: "force-cache", ///< SSG getStaticSideProps
    cache: "no-store", ///< SSR getServerSideProps
    // next: {
    //   revalidate: 20, ///< ISR revalidate
    // },
    headers: {
      "Content-Type": "application/json",
     "session": "12345"
    },
  });

  // await wait(4000);

  

  return flimResponse.json();
}

export default async function Genre (props: any) {
  const flim = await fetchflim();
  console.log(  flim.length)
  return (
  <section>
    <div>Genre</div>
   <Listing flim={flim.results}></Listing>
  </section>
  )
}
