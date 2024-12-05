import Link from 'next/link'
import React from 'react'
import { BsSend, BsInstagram, BsYoutube, BsFacebook, BsPinterest } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='w-full'>
        <div className='w-full bg-neutral-100 p-2 text-center'>
            <p className='uppercase tracking-widest'>shop my spring splendid collection!</p>
        </div>
        <div className='w-full bg-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='p-12 flex items-center justify-center gap-10 mx-auto'>
                    <div className='flex gap-5 text-lg tracking-tight text-neutral-500'>
                        <Link href={'/about'}>
                            <p>About</p>
                        </Link>
                        <Link href={'/contact'}>
                            <p>Contact</p>
                        </Link>
                        <Link href={'/newsletter'}>
                            <p>Subscription</p>
                        </Link>
                    </div>
                    <Link href={'/'}>
                        <p className='text-7xl uppercase tracking-tightest'>Maria Fleitman</p>
                    </Link>
                    <div className='flex gap-5 text-lg tracking-tight text-neutral-500'>
                        <Link href={'/shop'}>
                            <p>Shop</p>
                        </Link>
                        <Link href={'/collection'}>
                            <p>Collection</p>
                        </Link>
                        <div className='mb-0 mt-auto flex items-center justify-center gap-2 mr-0'>
                            <div>
                                <span className='text-neutral-300 hover:text-neutral-300 text-2xl'>
                                    <a href='https://twitter.com'>
                                        <BsInstagram />
                                    </a>
                                </span>
                            </div>
                            <div>
                                <span className='text-neutral-300 hover:text-neutral-300 text-2xl'>
                                    <BsFacebook />
                                </span>
                            </div>
                            <div>
                                <span className='text-neutral-300 hover:text-neutral-300 text-2xl'>
                                    <BsYoutube />
                                </span>
                            </div>
                            <div>
                                <span className='text-neutral-300 hover:text-neutral-300 text-2xl'>
                                    <BsPinterest />
                                </span>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='border-t border-b p-5 border-black mx-auto flex items-center justify-center gap-10 uppercase tracking-widest'>
                <Link href={'/category/fashion'}>
                    <p>fashion</p>
                </Link>
                <Link href={'/category/beauty'}>
                    <p>beauty</p>
                </Link>
                <Link href={'/category/home'}>
                    <p>home</p>
                </Link>
                <Link href={'/category/lifestyle'}>
                    <p>lifestyle</p>
                </Link>
                <Link href={'/category/entertaining'}>
                    <p>entertaining</p>
                </Link>
                <Link href={'/category/wellness'}>
                    <p>wellness</p>
                </Link>
                <Link href={'/category/holiday'}>
                    <p>holiday</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar