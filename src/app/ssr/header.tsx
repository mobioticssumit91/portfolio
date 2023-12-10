import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
    let items = [ {title: 'Home-SSR', link: '/ssr'}, {title: 'Trending-SSR', link: '/ssr/trending'}, {title: 'Genres-SSR', link: '/ssr/genres'}]
  return (
    <div className='flex justify-between mx-8 my-4'>
        <div className='text-red-300 sumit'>SSR</div>
        <div >
            <ul className='flex'>
                
             {items.map((item, index) => {
                return ( <li className='mr-6 text-blue-200' key={index}> <Link href={item.link}> { item.title } </Link> </li>)
             })}
            </ul>
        </div>

    </div>
  )
}
