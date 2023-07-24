import React from 'react'

export const Payment = () => {
  return (
    <div className='w-full h-[50vh] mt-400'>
        <div className='w-8/12 mx-auto flex items-center justify-center flex-col'>
            <div className='flex items-center justify-center my-5'>
                <span className='-mr-3 border-solid border-black/50 border-[1px] w-52'></span>
                <button className='p-3 px-5 xs:text-xl md:text-4xl font-extralight font-Poppins tracking-wider hover:tracking-widest text-black'>Powered By</button>
                <span className='-ml-3 border-solid border-black/50 border-[1px] w-52'></span>
            </div>
            <div className='mx-auto flex items-center justify-between w-full my-10'>
                <div className='w-20'>
                    <img className='w-full h-full object-cover' src="https://www.ethiotelecom.et/wp-content/uploads/2021/04/cropped-Ethiotelcom_Logo-01-1.png" alt="" />
                </div>
                <div className='w-20'>
                    <img className='w-full h-full object-cover' src="https://www.ethiotelecom.et/wp-content/uploads/2021/08/Banks-logo_Abyssinia.png" alt="" />
                </div>
                <div className='w-20'>
                    <img className='w-full h-full object-cover' src="https://www.ethiotelecom.et/wp-content/uploads/2021/06/telebirr_Web-03.png" alt="" />
                </div>
                <div className='w-20'>
                    <img className='w-full h-full object-cover' src="https://colbatanplc.com/wp-content/uploads/elementor/thumbs/output-onlinepngtools-1-pgmsvt9hyhsmys3w53i82taeracmgcm5uqamoi0tmo.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
