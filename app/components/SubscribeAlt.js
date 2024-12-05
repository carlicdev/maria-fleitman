import React from 'react'

const SubscribeAlt = () => {
  return (
    <div className='w-full py-24'>
        <div className='max-w-7xl mx-auto flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='p-5'>
                    <div className='px-10'>
                    <p className='text-neutral-500 text-2xl font-ligth mb-10'>Get My FREE Carry-On Packing Guide!</p>
                        <form  className='flex flex-col gap-5 '>
                            <input
                                placeholder='NAME'
                                type='text'
                                name='name'
                                className='w-full  border-b border-neutral-300 p-2'
                            />
                            <input
                                placeholder='EMAIL'
                                type='email'
                                name='email'
                                className='w-full  border-b border-neutral-300 p-2'
                            />
                            <button 
                                type='submit'
                                className='uppercase text-2xl  px-5 py-2 mt-4 mb-2  text-xl shadow text-white bg-neutral-300'>
                                {`Subscribe`}
                            </button>
                        </form>

                </div>
                </div>
            </div>
            <div className='w-full lg:w-1/2 relative z-0'>
                <div className='z-20 max-w-[400px] border border-gray-200 shadow bg-white rounded p-2 text-center'>
                    <div className='w-full p-10 bg-neutral-200'>
                        <p className='text-2xl mb-5'>Subscribe</p>
                        <p>Join over 1,000,000 readers and get The Blonde Abroad's go-to packing guide, exclusive travel tips, priority access to giveaways and more!</p>
                    </div>
                </div>
                <div className='z-10 max-w-[300px] border border-gray-200 shadow bg-white rounded p-2 pb-10 text-center absolute top-10 right-10 -rotate-3'>
                    <img src='/maria-fondo.jpg' alt='uno' className='w-full h-[300px]' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubscribeAlt