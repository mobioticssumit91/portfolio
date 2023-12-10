
import Image from 'next/image'
import Listing from './listing'

async function fetchflim() {
  const flimResponse = await fetch("https://pineapple-tree-default-rtdb.firebaseio.com/v1/movie.json", {
    // cache: "force-cache", ///< SSG getStaticSideProps
    // cache: "no-store", ///< SSR getServerSideProps
    next: {
      revalidate: 3600, ///< ISR revalidate
    },
  });

  // await wait(4000);

  console.log("fetching flim");

  return flimResponse.json();
}

export default async function Home (props: any) {
  const flim = await fetchflim();

  return (
  <section>
    <div>Home</div>
   <Listing flim={flim.results}></Listing>
  </section>
  )
}
