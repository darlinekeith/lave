import React from 'react'

const Donations = () => {
  return (
    <div name='donations' className='w-full text-white my-24'>
        <div className='w-full h-[800px] bg-slate-900 absolute  mix-blend-overlay' ></div>
       
       <div className='max-w-[1240px] mx-auto py-12'>

            <div className='text-center py-8 text-slate-300'>
                <h2 className='text-3xl uppercase'>Donations</h2>
                <h3 className='text-5xl font-bold text-white py-8'>You have a role you can play</h3>
                <p className='text-3xl'>Together, we can provide a world for everyone to believe in. Partner with us.</p>
            </div>

            <div className='grid md:grid-cols-2'>

            <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Monthly</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$10<span className='text-xl text-slate-500 flex flex-col-reverse'>/mo</span></p>
                    </div>
                   <p className='text-2xl py-8 text-slate-500'>Join our Monthly donars and be able to contribute to the livelihood of our members, our monthly members recieve full transparency of the running of the organisation, this also adds you to our newsletter of the organisation.</p>
                <div>
                    <button className='w-full py-4 my-4'>Donate</button>
                </div>
                </div>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>One time</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$20</p>
                    </div>
                   <p className='text-2xl py-8 text-slate-500'>You can too make a one-time donation to the organisation. These donations are used to acqiure the basic necessities for the families we take care of, these range from sanitary wear for female to meals and education.</p>
                <div>
                    <button className='w-full py-4 my-4'>Donate</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Donations