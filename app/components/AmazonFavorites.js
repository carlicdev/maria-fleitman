import React from 'react'
import { getItems } from '../services/graphql';

const AmazonFavorites = async () => {
    const items = await getItems();

    let index = 1;
  return (
    <div className='w-full'>
        <div className='w-full px-5'>
            <div className='w-full border-b-2  border-black flex'>
                <div className='p-5 bg-black text-white'>
                    <p className='text-5xl'>Amazon Favs</p>
                </div>
            </div>
        </div>
        {/* {
            items.length && (
            <div className='flex flex-col px-5'>
                <img src={items[index].image.url} alt='item' className='w-full h-[500px]' />
                <div className='flex flex-wrap'>
                    <p className='mr-auto ml-0'>{items[index].name}</p>
                    <p className='mr-0 ml-auto'>${items[index].price}</p>
                </div>
                <p className='mr-0 ml-auto mt-5 '>${items[index].description}</p>
            </div>
            )
        } */}
    </div>
  )
}

export default AmazonFavorites