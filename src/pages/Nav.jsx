import React, { useState } from 'react'
import {AiOutlineMenuUnfold, AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'
import {BsFillSunFill, BsShuffle} from 'react-icons/bs'
import {CiUser} from 'react-icons/ci'
import { Link } from 'react-router-dom'
import {IoCloseSharp} from 'react-icons/io5'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
export const Nav = () => {
    let [scroll,setScroll] = useState(false)
    let [inputshow,setInputShow] = useState(false)
    let [tab,setTab] = useState(false)
    window.onscroll = (e) => {
        let height = Math.floor(window.scrollY)
        if(height > 50) setScroll(true)
        else setScroll(false)
    }
  return (
    <nav className={`bg-[#fcb800] xs:fixed xl:static transition_cubic  w-full nav z-[999] ${scroll ? 'xs:py-1 xl:py-0' : 'xs:py-0 xl:py-0'}`}>
        <div className={`flex xs:w-11/12 xl:w-10/12 mx-auto xs:px-4 sm:px-0 items-center justify-between py-1`}>
            <ul className='flex items-center justify-center xs:w-full xl:w-3/12'>
                <Link to={'/'} className='xs:w-full xl:w-52'>
                    <img src="https://martretha.com/wp-content/uploads/2022/08/logo.png" alt="" />
                </Link>
            </ul>
            <ul className='w-full mx-10 xs:hidden xl:flex items-center justify-start transiton-none bg-[#78784c]'>
                <input type="text" placeholder='Search anything...' className='text-white font-Kreon tracking-wider outline-none bg-transparent border-solid border-transparent focus:border-black border-b-[2px] p-3 w-11/12' />
                <li className='flex items-center hover:bg-black/50 group justify-center cursor-pointer text-white p-4 group w-[100px] ml-1'>
                    <AiOutlineSearch className='text-xl text-black/40 group-hover:text-white' />
                </li>
            </ul>
            <ul className='w-4/12 xs:hidden xl:flex items-end justify-end'>
                <abbr title="Cart">
                    <li className='flex items-center justify-center cursor-pointer w-10 h-10 rounded-full hover:bg-[#78784c] mx-4'>
                        <AiOutlineShoppingCart className='text-xl' />
                    </li>
                </abbr>
                <abbr title="Dark/white">
                    <li className='flex items-center justify-center cursor-pointer w-10 h-10 rounded-full hover:bg-[#78784c] mx-4'>
                        <BsFillSunFill className='text-xl' />
                    </li>
                </abbr>
                <abbr title="Compare product">
                    <li className='flex items-center justify-center cursor-pointer w-10 h-10 rounded-full hover:bg-[#78784c] mx-4'>
                        <BsShuffle className='text-xl' />
                    </li>
                </abbr>
                <abbr title="Account">
                    <li className='flex items-center justify-center cursor-pointer w-10 h-10 rounded-full hover:bg-[#78784c] mx-4'>
                        <CiUser className='text-xl' />
                    </li>
                </abbr>
            </ul>
            <div onClick={() => setTab(!tab)} className='w-full z-[9999] xl:hidden xs:flex items-end justify-end'>
                <li className='list-none flex items-center justify-center cursor-pointer w-10 h-10 rounded-full hover:bg-[#78784c] mx-4'>
                    {tab ?  <IoCloseSharp className='group-hover:text-white text-xl' /> : <AiOutlineMenuUnfold className='group-hover:text-white text-xl' />}
                </li>
            </div>
        </div>
        <div className={`${scroll ? 'fixed' : 'static'} py-1 bg-[#fcb800] top-0 w-full mx-auto xs:hidden xl:flex items-center justify-start`}>
            <div className='xl:w-full 2xl:w-10/12 mx-auto flex items-center justify-between'>
                <ul className='w-10/12 mx-auto flex items-center justify-start'>
                    <li className='relative before:absolute before:bottom-0 before:left-0 before:content-[""] before:w-0 before:hover:w-full before:h-[2px] before:rounded-md before:bg-black flex items-center justify-start group mx-5 py-1 font-light'>
                        <HiOutlineMenuAlt3 className='group-hover:rotate-180 mr-1' />
                        <Link to={'/'}>All Departments</Link>
                    </li>
                    <li className='relative before:absolute before:bottom-0 before:left-0 before:content-[""] before:w-0 before:hover:w-full before:h-[2px] before:rounded-md before:bg-black flex items-center justify-start mx-5 py-1 font-light'>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className='relative before:absolute before:bottom-0 before:left-0 before:content-[""] before:w-0 before:hover:w-full before:h-[2px] before:rounded-md before:bg-black flex items-center justify-start mx-5 py-1 font-light'>
                        <Link to={'/'}>Brand Shops</Link>
                    </li>
                    <li className='relative before:absolute before:bottom-0 before:left-0 before:content-[""] before:w-0 before:hover:w-full before:h-[2px] before:rounded-md before:bg-black flex items-center justify-start mx-5 py-1 font-light'>
                        <Link to={'/'}>Become Vendor</Link>
                    </li>
                    <li className='relative before:absolute before:bottom-0 before:left-0 before:content-[""] before:w-0 before:hover:w-full before:h-[2px] before:rounded-md before:bg-black flex items-center justify-start mx-5 py-1 font-light'>
                        <Link to={'/'}>Become An Affiliate</Link>
                    </li>
                    <li className='relative before:absolute before:bottom-0 before:left-0 before:content-[""] before:w-0 before:hover:w-full before:h-[2px] before:rounded-md before:bg-black flex items-center justify-start mx-5 py-1 font-light'>
                        <Link to={'/'}>Hot sales</Link>
                    </li>
                </ul>
                <ul className={`${scroll ? 'flex' : 'hidden'} w-4/12 items-center justify-end`}>
                    <div className={`${inputshow ? 'hidden' : 'flex'} w-11/12 flex items-end justify-end`}>
                        <li className='flex items-center justify-center cursor-pointer w-10 h-10 rounded-full hover:bg-black/20 mx-4'>
                            <AiOutlineShoppingCart className='text-xl' />
                        </li>
                        <li className='flex items-center justify-center cursor-pointer w-10 h-10 rounded-full hover:bg-black/20 mx-4'>
                            <BsFillSunFill className='text-xl' />
                        </li>
                        <li className='flex items-center justify-center cursor-pointer w-10 h-10 rounded-full hover:bg-black/20 mx-4'>
                            <BsShuffle className='text-xl' />
                        </li>
                        <li className='flex items-center justify-center cursor-pointer w-10 h-10 rounded-full hover:bg-black/20 mx-4'>
                            <CiUser className='text-xl' />
                        </li>
                    </div>
                    <li onClick={() => setInputShow(!inputshow)} className='flex items-center justify-center cursor-pointer w-10 h-10 rounded-full hover:bg-black/20 mx-4'>
                        <AiOutlineSearch className='text-xl' />
                    </li>
                     <div className={`${inputshow ? 'scale-100  w-11/12' : 'scale-0  w-0'} origin-right flex items-center justify-start`}>
                        <input type="text" placeholder='Search anything...' className={`text-black/90 placeholder:text-black font-Kreon tracking-wider outline-none bg-transparent border-solid border-transparent focus:border-black border-b-[2px] p-2 transition_cubic`} />
                        <li className='flex items-center hover:bg-black/50 group justify-center cursor-pointer text-white scale-100 transition_cubic p-3 group w-10 h-10 rounded-full bg-black ml-1'>
                            <AiOutlineSearch className='text-xl text-white/40 group-hover:text-white group-hover:scale-110' />
                        </li>
                     </div>
                </ul>
            </div>
        </div>
        <div>
            <div className={`${tab ? 'right-0' : '-right-[-110%]'} transition_cubic absolute h-screen top-0 z-[999] py-1 bg-[#fcb800] w-full mx-auto xl:hidden xs:flex items-start pt-5 justify-start`}>
                <div className='w-10/12 mx-auto flex items-start justify-start flex-col'>
                    <ul className='w-full mx-auto flex items-start justify-start flex-col'>
                        <li className='w-full my-2 relative before:absolute before:bottom-0 before:left-0 before:content-[""] before:w-0 before:hover:w-full before:h-[2px] before:rounded-md before:bg-black flex items-center justify-start group mx-5 py-1 font-light'>
                            <HiOutlineMenuAlt3 className='group-hover:rotate-180 mr-1' />
                            <Link to={'/'}>All Departments</Link>
                        </li>
                        <li className='w-full my-2 relative before:absolute before:bottom-0 before:left-0 before:content-[""] before:w-0 before:hover:w-full before:h-[2px] before:rounded-md before:bg-black flex items-center justify-start mx-5 py-1 font-light'>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className='w-full my-2 relative before:absolute before:bottom-0 before:left-0 before:content-[""] before:w-0 before:hover:w-full before:h-[2px] before:rounded-md before:bg-black flex items-center justify-start mx-5 py-1 font-light'>
                            <Link to={'/'}>Brand Shops</Link>
                        </li>
                        <li className='w-full my-2 relative before:absolute before:bottom-0 before:left-0 before:content-[""] before:w-0 before:hover:w-full before:h-[2px] before:rounded-md before:bg-black flex items-center justify-start mx-5 py-1 font-light'>
                            <Link to={'/'}>Become Vendor</Link>
                        </li>
                        <li className='w-full my-2 relative before:absolute before:bottom-0 before:left-0 before:content-[""] before:w-0 before:hover:w-full before:h-[2px] before:rounded-md before:bg-black flex items-center justify-start mx-5 py-1 font-light'>
                            <Link to={'/'}>Become An Affiliate</Link>
                        </li>
                        <li className='w-full my-2 relative before:absolute before:bottom-0 before:left-0 before:content-[""] before:w-0 before:hover:w-full before:h-[2px] before:rounded-md before:bg-black flex items-center justify-start mx-5 py-1 font-light'>
                            <Link to={'/'}>Hot sales</Link>
                        </li>
                    </ul>
                    <ul className={`flex w-full my-4 items-start justify-start flex-col`}>
                        <div className={`w-full flex items-center justify-center`}>
                            <li className='flex items-center justify-center cursor-pointer w-10 h-10 rounded-full hover:bg-black/20 mx-3'>
                                <AiOutlineShoppingCart className='text-xl' />
                            </li>
                            <li className='flex items-center justify-center cursor-pointer w-10 h-10 rounded-full hover:bg-black/20 mx-3'>
                                <BsFillSunFill className='text-xl' />
                            </li>
                            <li className='flex items-center justify-center cursor-pointer w-10 h-10 rounded-full hover:bg-black/20 mx-3'>
                                <BsShuffle className='text-xl' />
                            </li>
                            <li className='flex items-center justify-center cursor-pointer w-10 h-10 rounded-full hover:bg-black/20 mx-3'>
                                <CiUser className='text-xl' />
                            </li>
                        </div>
                    </ul>
                    <ul className='w-full my-4 xs:flex xl:hidden items-center justify-start transiton-none bg-[#78784c]'>
                        <input type="text" placeholder='Search anything...' className='placeholder:text-black text-white font-Kreon tracking-wider outline-none bg-transparent border-solid border-transparent focus:border-black border-b-[2px] p-3 w-11/12' />
                        <li className='flex items-center hover:bg-black/50 group justify-center cursor-pointer text-white p-4 group w-[100px] ml-1'>
                            <AiOutlineSearch className='text-xl text-black/40 group-hover:text-white' />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}



    
    
    
    
    

