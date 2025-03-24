import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'

const AllInOne = () => {
  const values = [
    {
      title: 'Love',
      description: 'Our love is unbound. Empathy and love are values that build a healthy community. We not only provide care for the needy but to their families too that have been affected by the hardship.'
    },
    {
      title: 'Respect',
      description: 'We have a deep admiration for the people we help providing a powerful and hugely impactful Values Based Leadership with families and local communities to awaken people, young and old, to the awareness of different basic human values and what they can do for you.'
    },
    {
      title: 'Concern for Others',
      description: 'The ability to reach outside of yourself and walk in someone else\'s shoes. Over time, empathy grows into an informed intuition for how other people see the world. We rely on this intuition to help us make better decisions that affect the folks around us.'
    },
    {
      title: 'Child centered',
      description: 'Many children in Uganda have lost one or both parents to conflict or HIV, leaving elderly grandparents or an older sibling to care for them. Many children go hungry in Uganda, especially in large families with minimal income and many mouths to feed.'
    },
    {
      title: 'Integrity',
      description: 'We hold ourselves to a high standard. We are committed to being fair, objective, and proactively transparent in our decisions and behaviors. We honor our commitments and doing the right thing, even when no one is looking.'
    },
    {
      title: 'Accountability',
      description: 'Making accountability real, through genuine and open two-way communication that celebrates successes and demonstrates willingness to learn from mistakes, helps to build this trust and confidence and earn legitimacy.'
    },
    {
      title: 'Professionalism',
      description: 'Professionalism breeds the confidence both of the beneficiaries the charity works with and other organisations that may be referring people to its services.'
    },
    {
      title: 'Healthcare',
      description: 'We value a wellness system of quality patient care for all persons, including vulnerable and underserved people in our community, regardless of ability to pay.'
    }
  ];

  return (
    <section name='values' className='w-full my-32'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>Our Values</h2>
          <p className='text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto'>
            Our community partners guide us and our values drive us.
          </p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {values.map((value, index) => (
            <div 
              key={index}
              className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col'
            >
              <div className='flex items-start mb-4'>
                <div className='bg-green-100 p-2 rounded-full'>
                  <CheckIcon className='w-6 h-6 text-green-600' />
                </div>
                <h3 className='font-bold text-xl ml-3 text-gray-900'>{value.title}</h3>
              </div>
              <p className='text-gray-600 flex-grow'>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AllInOne