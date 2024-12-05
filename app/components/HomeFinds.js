import React from 'react'
import { getItems } from '../services/graphql';

const HomeFinds = async () => {
    const items = await getItems();
    let index = 0;

    console.log({items: items})
  return (
    <div className='border-t border-b border-black p-5'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/5'>
          <p className='text-8xl  -rotate-90 capitalize'>Home finds</p>
        </div>
        {
          items.length && (
          <div className='w-full lg:w-4/5 flex flex-col justify-center items-center p-10'>
            <div className='flex items-center justify-center gap-4 '>
              <div className=' border-2 border-black bg-white w-72 h-72'>
                <img src={items[index].image.url} alt='item' className='w-72 h-72' />
              </div>
              <div className='border-2 border-black bg-white w-72 h-72'>
                <img src={items[index].image.url} alt='item' className='w-72 h-72' />
              </div>
              <div className=' border-2 border-black bg-white w-72 h-72'>
                <img src={items[index].image.url} alt='item' className='w-72 h-72' />
              </div>
            </div>
            <p className='text-4xl mt-10'>Shop More Finds</p>
          </div>
          )
        }
      </div>
    </div>
  )
}

export default HomeFinds