import React from 'react'
import Image from 'next/image'

const CategoryHero = ({title, content}) => {
  return (
    <div className='w-full flex flex-wrap'>
        <div className='order-2 lg:order-1 w-full lg:w-1/2 bg-neutral-100 flex flex-col items-center justify-center p-5'>
            <div className='max-w-3xl mx-auto flex flex-col gap-10'>
            <p className='text-5xl text-light'><span className='text-7xl'>/</span>{title}</p>
            <p className='text-xl tracking-wide text-justify'>{content}</p>
            </div>
            
        </div>
        <div className='order-1 lg:order-2 w-full lg:w-1/2'>
            <Image src={'/maria-fondo.jpg'} width={1000} height={1000} />
        </div>
    </div>
  )
}

export default CategoryHero