import React, { useState } from 'react'
import { First_Section } from './First_Section'
import { Second_Section } from './Second_Section'
import { Catagories } from './Catagories'
import { Fashion } from './Fashion'
import { Payment } from './Payment'
import {GoArrowUp} from 'react-icons/go'
export const Home = () => {
  let [scroll,setScroll] = useState(false)
  window.onscroll = () => {
    if(window.scrollY > 50) setScroll(true)
    else setScroll(false)
  }
  let setTop = () => {
    window.scrollTo({
      top : 0,
      left : 0
    })
  }
  return (
    <div className='home flex items-center justify-center flex-col'>
        <First_Section />
        <Second_Section />
        <Catagories />
        <Fashion />
        <Catagories />
        <Payment />
        <div onClick={() => setTop()} className={`${scroll ? 'scale-100' : 'scale-0'} z-[999] fixed bottom-5 right-5 bg-black text-[#fcb800] xs:w-9 xs:h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-md cursor-pointer group`}>
          <GoArrowUp className='group-hover:scale-[2] text-xl transition-all duration-700 ease-linear scale-100' />
        </div>
    </div>
  )
}
