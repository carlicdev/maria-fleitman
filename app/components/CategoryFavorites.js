import Link from 'next/link';
import { getItemsByCategory } from '../services/graphql'

const CategoryFavorites = async ({category}) => {
  const items = await getItemsByCategory(category);
  
  const lastItems = items.slice(0, 3);
  return (
    <div className='bg-neutral-200 p-5 py-20'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/5'>
          <p className='text-5xl  -rotate-90 mt-24cd capitalize'><span className='text-normal'>{category}</span> favorites</p>
        </div>
        <div className='w-full lg:w-4/5 flex flex-col justify-center items-center p-10'>
          <div className='flex items-center justify-center gap-2 '>
            {
                    lastItems.map((item, index) => (
                      <div className=' bg-white w-56 h-56 text-center'>
                        <Link href={`/`}>
                          <img src={item.image.url} alt='uno' className='w-56 h-56' />
                          <p className='text-xl mt-2'>{item.name}</p>
                        </Link>
                      </div>
                    ))
                  }

          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryFavorites