'use client'
import Image from 'next/image'
import Listing from '../listing'
import { userStore } from '../../../zustand/user'
import { localDB } from '../../../zustand/db'

export default function Genres () {
   const user = userStore((state: any) => state.user)
  return (
  <section>
    <div>Genres -- {user.title} {localDB.age}</div>
    <Listing typeSection={"Genres"}></Listing>
  </section>
  ) 
}
