

import Link from 'next/link'

import { BsSend, BsInstagram, BsYoutube, BsFacebook, BsPinterest } from 'react-icons/bs'
import { AiOutlineTrademark } from 'react-icons/ai'

const Footer = async () => {

  return (
    <div className='w-full bg-neutral-100 pt-5 mt-20'>
        <div className='max-w-7xl w-full mx-auto'>
            <div className='flex flex-wrap px-2 lg:px-0'>
                <div className='flex flex-wrap w-full md:w-1/2 lg:w-2/3'>
                    <div className='w-full md:w-1/2 flex items-center'>
                        <div className='mb-24 mt-auto'>
                            <p className='text-4xl text-special -rotate-90'>on the blog</p>
                        </div>                
                        <div className='border-l pl-5 border-black flex flex-col gap-2 tracking-widest'>
                            <Link href={'/category/fashion'}>
                                <p className='uppercase'>fashion</p>
                            </Link>
                            <Link href={'/category/beauty'}>
                                <p className='uppercase'>beauty</p>
                            </Link>
                            <Link href={'/category/home'}>
                                <p className='uppercase'>home</p>
                            </Link>
                            <Link href={'/category/lifestyle'}>
                                <p className='uppercase'>lifestyle</p>
                            </Link>
                            <Link href={'/category/entertaining'}>
                                <p className='uppercase'>entertaining</p>
                            </Link>
                            <Link href={'/category/wellness'}>
                                <p className='uppercase'>wellness</p>
                            </Link>
                            <Link href={'/category/holiday'}>
                                <p className='uppercase'>holiday</p>
                            </Link>
                        </div>
                    </div>

                    <div className='w-full md:w-1/2 flex items-center'>
                        <div className='mb-24 mt-auto'>
                            <p className='text-4xl text-special -rotate-90'>more mf</p>
                        </div>          
                        <div className='border-l pl-5 border-black flex flex-col gap-2 tracking-widest'>
                            <Link href={'/about'}>
                                <p className='uppercase'>about</p>
                            </Link>
                            <Link href={'/contact'}>
                                <p className='uppercase'>contact</p>
                            </Link>                           
                            <Link href={'/shop'}>
                                <p className='uppercase'>shop</p>
                            </Link>
                            <Link href={'/newsletter'}>
                                <p className='uppercase'>subscription</p>
                            </Link>
                            <Link href={'/collection'}>
                                <p className='uppercase'>collection</p>
                            </Link>                            
                        </div>
                    </div>

                </div>

                <div className='flex flex-wrap w-full md:w-1/2 lg:w-1/3'>
                    <div className='mt-5 lg:mt-0 w-full md:w-1/2 lg:w-1/4 flex flex-col gap-2 border-r border-black'>
                        <div className='flex flex-col gap-4 text-2xl my-auto mr-10 ml-auto text-neutral-400'>
                            <div><BsInstagram/></div>
                            <div><BsFacebook/></div>
                            <div><BsYoutube/></div>
                            <div><BsPinterest/></div>
                        </div>
                    </div>
                    <div className='mt-5 lg:mt-0 w-full lg:w-3/4 p-5'>
                        <p className='text-xl mb-2 text-justify'>Entérate de nuevos posts, cursos, productos y promociones.</p>
                    </div>
                </div>

            </div>
        </div>
            <div className='mt-10 bg-neutral-200 py-5'>
                <div className='mx-auto flex justify-center tracking-widest'>
                    <span className='mr-1 mt-1'><AiOutlineTrademark/></span>
                    <p className='text-gray-800 uppercase'> 2024 maria fleitman</p>
                </div>
            </div>
    </div>
  )
}

export default Footer