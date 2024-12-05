import React from 'react'
import ReelsSection from '../components/ReelsSection'
import SubscribeAlt from '../components/SubscribeAlt'

const About = () => {
  return (
    <main>
      <div className='w-full flex flex-wrap bg-neutral-100'>
          <div className='order-2 lg:order-1 w-full lg:w-1/2 bg-neutral-100 flex flex-col items-center justify-center p-5'>
            <p>About Page</p>
          </div>
          <div className='order-1 lg:order-2 w-full lg:w-1/2'>
          </div>
      </div>
      <ReelsSection />
      <SubscribeAlt />
    </main>
  )
}

export default About