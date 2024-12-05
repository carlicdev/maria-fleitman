import React from 'react'
import PostCard from './PostCard'

const RecentPostsSection = () => {
  return (
    <div>
        <div className='bg-white text-center py-24 border-b border-black'>
            <p className='text-8xl tracking-tighter'><span className='italic capitalize'>recent</span> <span className='uppercase normal'>posts</span></p>
        </div>

        <div className='bg-neutral-100'>
                <PostCard />
                <PostCard />
                <PostCard />
        </div>
    </div>
  )
}

export default RecentPostsSection