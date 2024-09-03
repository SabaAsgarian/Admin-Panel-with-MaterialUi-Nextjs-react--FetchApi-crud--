import React from 'react'
import Image from 'next/image'
import Men from '../img/404.png'

export default function Spam() {
  return (
    <div>
      
      <Image src={Men} alt="me" width={1000} height={585} />
    </div>
  )
}