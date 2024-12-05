import React from 'react'
import { getCategoryPost } from '../services/graphql'
import Link from 'next/link';

const CategoryCarousel = async ({category}) => {
  const posts = await getCategoryPost(category);
  
  // const lastPosts = posts.slice(0, 3);
  return (
    <div className='border-t border-b border-black p-5'>
        <div className='max-w-7xl mx-auto flex flex-wrap justify-center items-center'>
            <div className='w-full lg:w-1/5'>
                <p className='text-5xl'>TOP <span className='italic'>{category}</span> ARTICLES</p>
                <p className='uppercase text-2xl mt-10'>read all posts</p>
            </div>
            <div className='w-full lg:w-4/5 flex flex-col justify-center items-center p-10'>
                <div className='flex items-center justify-center gap-4 '>
                  {/* {
                    lastPosts.map((post, index) => (
                      <div key={index} className=' bg-white w-72 h-80'>
                        <Link href={`/post/${post.node.slug}`}>
                          <img src={post.node.featuredImage.url} alt='uno' className='w-72 h-56' />
                          <p className='font-black text-3xl mt-2'>{post.node.title}</p>
                        </Link>
                      </div>
                    ))
                  } */}
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default CategoryCarousel