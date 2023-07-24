import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export const Footer = () => {
  return (
    <div className='bg-[#1e2d33] text-white h-[50vh]'>
        <div className='w-10/12 mx-auto grid xs:grid-cols-2 xl:grid-cols-4 gap-6'>
            <ul>
                <li className='my-5 font-light'>About</li>
                <li className='my-5 font-light'>Contact</li>
                <li className='my-5 font-light'>Terms and Conditions</li>
            </ul>
            <ul>
                <li className='my-5 font-light'>About</li>
                <li className='my-5 font-light'>Contact</li>
                <li className='my-5 font-light'>Terms and Conditions</li>
            </ul>
            <ul className='w-full mx-10 xs:hidden xl:flex items-center justify-start transiton-none'>
                    <input type="text" placeholder='Search anything...' className='text-white font-Kreon tracking-wider outline-none bg-transparent border-solid border-transparent focus:border-black border-b-[2px]' />
                    <li className='flex items-center hover:bg-black/50 group justify-center cursor-pointer text-white p-4 group w-[100px] ml-1'>
                        <AiOutlineSearch className='text-xl text-black/40 group-hover:text-white' />
                    </li>
                </ul>
            <ul className='xl:ml-10  xs:w-full'>
                <li className='my-5'>
                    <p>Bereket Alemayehu</p>
                </li>
                <li className='my-5'>balemayehu07@gmail.com</li>
                <li className='my-5 w-full xl:text-xl xs:text-xs'>(+251)-930-701-626</li>
            </ul>
        </div>
    </div>
  )
}
