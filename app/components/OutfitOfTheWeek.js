import React from 'react'
import { getOutfits } from '../services/graphql'

const OutfitOfTheWeek = async () => {
  const outfits = await getOutfits()

  console.log({outfits})
  return (
    <div className='py-10'>
      <div className='max-w-7xl mx-auto flex items-center border-b border-black pb-10'>
        <p className='ml-0 mr-auto uppercase text-sm'>outfit of the week</p>
        <p className='mx-auto text-5xl capitalize'>outfit of the week</p>
        <p className='ml-auto mr-0 uppercase text-sm'>outfit of the week</p>
      </div>

        {
          outfits.length && (
            <div className='max-w-7xl mx-auto flex flex-wrap p-10'>
              <div className='w-full lg:w-1/2 p-5'>
                <img src={outfits[0].featuredImage.url} alt='outfit' className='w-full h-[700px]' />
              </div>
              <div className='w-full lg:w-1/2 p-5 flex flex-wrap'>
                <div className='w-full lg:w-1/2 text-center'>
                  <img src={outfits[0].clothingItem[0].image.url} alt='outfit-item-1' className='cover no-repeat' />
                  <p className='capitalize'>{outfits[0].clothingItem[0].title}</p>
                </div>
                <div className='w-full lg:w-1/2 text-center'>
                  <img src={outfits[0].clothingItem[1].image.url} alt='outfit-item-1' className='cover no-repeat' />
                  <p className='capitalize'>{outfits[0].clothingItem[1].title}</p>
                </div>
                <div className='w-full lg:w-1/2 text-center'>
                  <img src={outfits[0].clothingItem[2].image.url} alt='outfit-item-1' className='cover no-repeat' />
                  <p className='capitalize'>{outfits[0].clothingItem[2].title}</p>
                </div>
                <div className='w-full lg:w-1/2 text-center'>
                  <img src={outfits[0].clothingItem[3].image.url} alt='outfit-item-1' className='cover no-repeat' />
                  <p className='capitalize'>{outfits[0].clothingItem[3].title}</p>
                </div>
              </div>
            </div>
          )
        }
    </div>
  )
}

export default OutfitOfTheWeek