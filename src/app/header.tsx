import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
    let items = [ {title: 'Home', link: '/'}, {title: 'Trending', link: '/trending'}, {title: 'Genres', link: '/genres'}]
  return (
    <div className='flex justify-between mx-8 my-4'>
        <div className='text-red-300 sumit'>CSR</div>
        <div >
            <ul className='flex'>
                
             {items.map((item) => {
                return ( <li className='mr-6 text-blue-200' > <Link href={item.link}> { item.title } </Link> </li>)
             })}
            </ul>
        </div>

    </div>
  )
}
