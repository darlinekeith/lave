import React from 'react'

import {CheckIcon} from '@heroicons/react/outline'

const AllInOne = () => {
  return (
    <div name='values' className='w-full my-32'>
        <div className='m-w-[1240px] mx-auto px-2'>
            <h2 className='text-5xl font-bold text-center'>Our values</h2>
            <p className='text-2xl py-8 texy-gray-500 text-center'>Our community partners guide us and our values drive us.</p>
        
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
            
            <div className='flex'>
                <div>
                <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Love</h3>
                    <p className='text-lg pt-2 pb-4'>Our love is unbound. Empathy and love are values that  build a healthy community. We not only provide care for the needy but to there families too that have been affected by the hardship.</p>
                </div>
            </div>
            <div className='flex'>
                <div>
                <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Respect</h3>
                    <p className='text-lg pt-2 pb-4'>We have a deep admiration for the people we help providing a powerful and hugely impactful Values Based Leadership with families and local communities to awaken people, young and old, to the awareness of different basic human values and what they can do for you.</p>
                </div>
            </div>
            <div className='flex'>
                <div>
                <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Concern for Others</h3>
                    <p className='text-lg pt-2 pb-4'>The ability to reach outside of yourself and walk in someone else's shoes. Over time, empathy grows into an informed intuition for how other people see the world. We rely on this intuition to help us make better decisions that affect the folks around us.</p>
                </div>
            </div>
            <div className='flex'>
                <div>
                <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Child centered</h3>
                    <p className='text-lg pt-2 pb-4'>Many children in Uganda have lost one or both parents to conflict or HIV, leaving elderly grandparents or an older sibling to care for them. Many children go hungry in Uganda, especially in large families with minimal income and many mouths to feed.</p>
                </div>
            </div>
            <div className='flex'>
                <div>
                <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Integrity</h3>
                    <p className='text-lg pt-2 pb-4'>We hold ourselves to a high standard. We are committed to being fair, objective, and proactively transparent in our decisions and behaviors. We honor our commitments and doing the right thing, even when no one is looking.</p>
                </div>
            </div>
            <div className='flex'>
                <div>
                <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Accountability</h3>
                    <p className='text-lg pt-2 pb-4'>Making accountability real, through genuine and open two-way communication that celebrates successes and demonstrates willingness to learn from mistakes, helps to build this trust and confidence and earn legitimacy.</p>
                </div>
            </div>
            <div className='flex'>
                <div>
                <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Professionalism</h3>
                    <p className='text-lg pt-2 pb-4'>Professionalism breeds the confidence both of the beneficiaries the charity works with and other organisations that may be referring people to its services.</p>
                </div>
            </div>
            <div className='flex'>
                <div>
                <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Healthcare</h3>
                    <p className='text-lg pt-2 pb-4'>We value a wellness system of quality patient care for all persons, including vulnerable and underserved people in our community, regardless of ability to pay.</p>
                </div>
            </div>

        </div>
        
        </div>
    </div>
  )
}

export default AllInOne