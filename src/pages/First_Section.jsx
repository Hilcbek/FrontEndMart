import React from 'react'
export const First_Section = () => {
  return (
    <div className='first flex items-center justify-center flex-col w-full h-screen'>
        <h1 data-text="MARTRETHA" className='font-Satisfy tracking-widest mar xs:text-5xl lg:text-[150px]'>MARTRETHA</h1>
        <div className='flex items-center justify-center my-5'>
            <span className='-mr-3 border-solid border-white/50 border-[.5px] xs:w-24 xl:w-32'></span>
            <button className='xs:p-2 xl:p-3 px-5 tracking-wider hover:tracking-widest xs:text-xs text-white/70 border-solid border-white/50 border-[1px]'>SHOP NOW</button>
            <span className='-ml-3 border-solid border-white/50 border-[.5px] xs:w-24 xl:w-32'></span>
        </div>
    </div>
  )
}
