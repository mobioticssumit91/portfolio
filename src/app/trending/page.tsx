"use client"

import Image from 'next/image'
import Listing from '../listing'
import { Message_data } from "../../../context/context";
import { useContext } from "react";
const { message, setMessage } = useContext(Message_data);

export default function Trending () {
  console.log(message)
  return (
  <section>
    <div>Trending</div>
    <Listing typeSection={"Trending"}></Listing>
  </section>
  )
}
