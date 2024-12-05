import React from 'react'
import { getItems } from '../services/graphql'

const HomeFindsAlt = async () => {
    const items = await getItems();

    let index = 0;

  return (
    <div className='w-full'>
        <div className='w-full px-5'>
            <div className='w-full border-b-2  border-neutral-300 flex'>
                <div className='p-5 bg-neutral-300 text-white'>
                    <p className='text-5xl'>Home Finds</p>
                </div>
            </div>
        </div>
        {/* {
            items.length && (
            <div className='flex flex-col'>
                <img src={items[index].image.url} alt='item' className='w-full h-[500px]' />
                <p>{items[index].name}</p>
                <p>${items[index].price}</p>
            </div>
            )
        } */}
    </div>
  )
}

export default HomeFindsAlt