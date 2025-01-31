import React from 'react'
import Heading from './Heading'
import img1 from '../assets/avataaars.svg'

export default function Home() {
  return (
    <div>
      <img src={img1} className='w-1/4 mx-auto' alt="img1" />
      <Heading text={'start framework'}></Heading>
    </div>
  )
}
