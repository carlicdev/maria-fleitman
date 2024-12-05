import React from 'react'
import SubscribeForm from './SubscribeForm'

const SubscribeSection = () => {
  return (
    <div className='w-full p-10 bg-[#c2ac92] text-white'>
      <div className='max-w-7xl mx-auto flex flex-col items-center justify-center'>
        <p className='text-5xl'>NEVER MISS <span className='italic'>a post</span></p>
        <div className='max-w-3xl text-center'>
          <p className='my-10 text-xl'>{"Sign up for my newsletter to receive weekly updates with products I’m loving, items I’m buying and exclusive sales straight to your inbox."}</p>
        </div>
        <div className='flex my-10 max-w-5xl gap-5'>
          <p className='uppercase tracking-tight font-bold'>beyond the blog</p>
          <p className='uppercase tracking-tight font-bold'>new on the blog</p>
          <p className='uppercase tracking-tight font-bold'>becky's weekly recap</p>
        </div>
        <div className='flex flex-wrap'>
          <SubscribeForm />
        </div>
      </div>
    </div>
  )
}

export default SubscribeSection