import React from 'react'
import Link from 'next/link';
import PostCardSp from './PostCardSp'
import { getCategoryPost } from '../services/graphql';
import styleDate from '../utils/date';

const PostList = async ({category}) => {
  const posts = await getCategoryPost(category);

  return (
    <div className='w-full flex flex-wrap'>
      {/* {
        posts.length &&
        posts.map((post, index) => (
          <div key={index} className='w-full md:w-1/2 lg:w-1/3 mt-5 p-5'>
            <img src={post.node.featuredImage.url} alt='uno' className='w-full h-[300px]' />
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
      } */}
    </div>
  )
}

export default PostList