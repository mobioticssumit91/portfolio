"use client"

import Image from 'next/image'
import Listing from '../listing'
import { useContext } from "react";

export default function Trending () {
  return (
  <section>
    <div>Trending</div>
    <Listing typeSection={"Trending"}></Listing>
  </section>
  )
}
