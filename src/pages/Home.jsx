import React from 'react'
import { First_Section } from './First_Section'
import { Second_Section } from './Second_Section'
import { Catagories } from './Catagories'
import { Fashion } from './Fashion'
import { Payment } from './Payment'

export const Home = () => {
  return (
    <div className='home flex items-center justify-center flex-col'>
        <First_Section />
        <Second_Section />
        <Catagories />
        <Fashion />
        <Catagories />
        <Payment />
    </div>
  )
}
