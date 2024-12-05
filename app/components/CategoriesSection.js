import Image from "next/image"

const CategoriesSection = () => {
  return (
    <div className='inspiration w-full border-t border-b border-black  pt-20 pb-24'>
      <div className='max-w-7xl mx-auto flex flex-col'>
        <p className='text-5xl tracking-tighter mx-auto'><span className='italic capitalize'>more</span> <span className='uppercase normal'>inspiration</span></p>
        <div className='flex flex-wrap items-center justify-around gap-2 mt-10 '>
            <div className='w-72 h-96'>
              <div className='flex text-sm uppercase'>
                <p className='ml-0 mr-auto'>/01</p>
                <p className='mr-0 ml-auto'>fashion</p>
              </div>
              <div className='border border-black w-full h-full p-3'>
                <div className="bg-cover bg-center bg-yellow-400">
                  <Image src={'/cat01.jpg'} width={400} height={300} className="bg-cover bg-center"/>
                </div>
              </div>
            </div>
            <div className='w-72 h-96'>
              <div className='mt-5 border border-black w-full h-full p-3'>
                <Image src={'/cat02.png'} width={400} height={300} className="bg-cover bg-center"/>
              </div>
              <div className='flex text-sm uppercase'>
                <p className='ml-0 mr-auto'>/02</p>
                <p className='mr-0 ml-auto'>beauty</p>
              </div>
            </div>
            <div className='w-72 h-96'>
              <div className='flex text-sm uppercase'>
                <p className='ml-0 mr-auto'>/03</p>
                <p className='mr-0 ml-auto'>lifestyle</p>
              </div>
              <div className='border border-black w-full h-full p-3'>
                <Image src={'/cat03.png'} width={400} height={300} className="bg-cover bg-center"/>
              </div>
            </div>
            <div className='w-72 h-96'>
              <div className='mt-5 border border-black w-full h-full p-3'>
              <Image src={'/cat04.png'} width={400} height={300} className="bg-cover bg-center"/>
              </div>
              <div className='flex text-sm uppercase'>
                <p className='ml-0 mr-auto'>/04</p>
                <p className='mr-0 ml-auto '>home</p>
              </div>

            </div>

        </div>
      </div>
    </div>
  )
}

export default CategoriesSection