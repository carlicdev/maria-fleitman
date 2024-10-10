import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full flex'>
        <div className='w-1/2 bg-neutral-100 flex flex-col items-center justify-center'>
            <div className='max-w-3xl mx-auto flex flex-col gap-10'>
            <p className='text-5xl text-light'>Inspiration for you, inspired by a beautiful woman to me.</p>
            <p className='text-xl tracking-wide text-justify'>Welcome to Cella Jane blog, a name inspired by my beautiful grandmother who meant the world to me. I’m Becky, and this is my home where I hope to inspire through sharing the beauty in life. From fashion and decor to recipes and family, I want to inspire confidence and joy creating a space that you love to visit for years to come.</p>
            </div>
            
        </div>
        <div className='w-1/2'>
            <Image src={'/maria-fondo.jpg'} width={1000} height={1000} />
        </div>
    </div>
  )
}

export default Hero