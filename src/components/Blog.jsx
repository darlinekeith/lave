import React from 'react'

import {PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid';

import suppoetImg from '../assets/pexels-shelagh-murphy-2883380.jpg'

const Blog = () => {
  return (
  <div name='nature' className='w-full mt-24'> 
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={suppoetImg} alt="/" />
      </div>

      <div className='max-w-[1240px] mx-auto text-white relative'>
        <div className='px-4 py-12'>
          <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Blog</h2>
          <h3 className='text-5xl font-bold py-6 text-center'>NATURE AND DEFINITION</h3>
          <p className='py-4 text-3xl text-slate-300'>The Organization is an independent, non-political, non-denominational, community based participatory, gender sensitive and nonprofit making body whose goal is to address the challenges of development and the social wellbeing of vulnerable children and elderly LUWERO DISTRICT, UGANDA.</p>
        </div>

        <div className='grid  grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
              <h3 className='font-bold text-2xl my-6'>Founder</h3>
              <p className='text-gray-600 text-xl'>The founder of this organisation is DENNIS LWANGA</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='flex items-center text-indigo-600'>Contact +18576150516 <ArrowSmRightIcon className='w-5 ml-2'/></p>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
              <h3 className='font-bold text-2xl my-6'>Director</h3>
              <p className='text-gray-600 text-xl'>The director of this organisation is Mr.Salim</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='flex items-center text-indigo-600'>Contact +256773443986 <ArrowSmRightIcon className='w-5 ml-2'/></p>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
              <h3 className='font-bold text-2xl my-6'>Program's Co-ordinator</h3>
              <p className='text-gray-600 text-xl'>Sebwami Ismael is a contractor responsible for program creation</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              <p className='flex items-center text-indigo-600'>Contact +256777108294<ArrowSmRightIcon className='w-5 ml-2'/></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog