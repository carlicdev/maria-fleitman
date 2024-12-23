import React from 'react'
import { getPosts } from '../services/graphql'
import styleDate from "../utils/date"
import Link from 'next/link'

const LatestArticles = async() => {
    const posts = await getPosts()

    console.log({posts})
  return (
    <div className='w-full'>
        <div className='w-full px-5'>
            <div className='w-full border-b-2  border-black flex'>
                <div className='p-5 bg-black text-white'>
                    <p className='text-5xl'>Latest Articles</p>
                </div>
            </div>
        </div>
        <div className='w-full flex flex-wrap '>
            {/* {
                posts.length && (
                    posts.map((post, index) => (
                        <div key={index} className='w-full lg:w-1/2 mt-5 p-5'>
                            {console.log(post.node)}
                            <img src={post.node.featuredImage.url} alt='uno' className='w-full h-[200px]' />
                            <Link href={`/post/${post.node.slug}`}>                        
                                <p className='my-5 text-neutral-300 font-bold text-2xl'>{post.node.title}</p>
                            </Link>
                            <div className='flex gap-5 items-center justify-start'>
                                <p className='font-bold text-black text-sm'>{post.node.author.name}</p>
                                <p className='font-light text-gray-600 text-sm'>- {styleDate(post.node.createdAt)}</p>
                            </div>
                            <p className='text-gray-600 text-xl my-5'>{post.node.excerpt}</p>
                        </div>
                    ))
                )
            } */}
        </div>
    </div>
  )
}

export default LatestArticles