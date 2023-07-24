import React, { useState } from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'
import { CiMenuKebab } from 'react-icons/ci'

export const Catagory = ({data}) => {
    let [show,setShow] = useState(false)
    let buttons = document.querySelectorAll('.button li')
    let [counter,setCounter] = useState(1)
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            setShow(false)
        })
    })
    let ChangeImage = (income) => {
        setCounter(income)
    }
  return (
    <div className='cursor-pointer'>
        <div onMouseOver={() => ChangeImage(1,this)} onMouseOut={() => ChangeImage(2,this)}>
            <img src={counter === 1 ? data.one : data.two} alt="" />
        </div>
        <div className='my-2 relative overflow-hidden flex items-center justify-between px-2'>
            <div className='font-extralight text-xs font-Poppins'>
                <p>PRINTED WRAP TROUSERS</p>
                <p className='my-1 font-bold'>49.95 EUR</p>
            </div>
            <li onClick={() => setShow(!show)} className={`${show ? 'scale-0' : 'scale-100'} flex list-none w-7 h-7 items-center justify-center rounded-full hover:bg-zinc-100 cursor-pointer`}>
                <CiMenuKebab />
            </li>
            <div className={`${show ? 'right-0 ' : '-right-96'} button list-none absolute flex items-center justify-center transition_cubic`}>
                <li className='mx-1 w-7 h-7 flex items-center justify-center rounded-full hover:bg-zinc-100 cursor-pointer'><AiOutlineShoppingCart /></li>
                <li className='mx-1 w-7 h-7 flex items-center justify-center rounded-full hover:bg-zinc-100 cursor-pointer'><AiOutlineHeart /></li>
                <li className='mx-1 w-7 h-7 flex items-center justify-center rounded-full hover:bg-zinc-100 cursor-pointer'><BsBookmark /></li>
            </div>
        </div>
    </div>
  )
}
