import Image from 'next/image'
import React from 'react'

const PostCardSp = ({image, date, category, title}) => {
  return (
    <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col py-10 px-24 '>
        <div className='mx-auto p-3  w-full'>
            <img src={image} alt='uno' className='w-full h-72'/>
        </div>
        <div className='flex my-5'>
            <p className='ml-0 mr-auto'>/ {date}</p>
            <p className='ml-auto mr-0'>/ {category}</p>
        </div>
        <p className='text-5xl font-bold'>{title}</p>
        <p className='uppercase mt-10'>read the post</p>
    </div>
  )
}

export default PostCardSp