import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24  bg-slate-900 text-gray-300 py-3 px-1'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 border-b-2 border-gray-600 py-8'>
            <div className='flex max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="http:darlinekeith.github.com/lave" className="hover:underline">LAVE™</a>. All Rights Reserved.
            </span>
            </div>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                 <FaFacebook />
                 <FaInstagram />
                 <FaGithub />
                 <FaTwitter />
            </div>
        </div>
    </div>
  )
}

export default Footer