import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full'>
        <div className='w-full bg-neutral-100 p-2 text-center'>
            <p className='uppercase tracking-widest'>shop my spring splendid collection!</p>
        </div>
        <div className='w-full bg-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='p-12 flex items-center justify-center gap-10 mx-auto'>
                    <div className='flex gap-5 text-lg tracking-tight text-neutral-500'>
                        <p>About</p>
                        <p>Contact</p>
                        <p>Subscription</p>
                    </div>
                    <p className='text-7xl uppercase tracking-tightest'>Maria Fleitman</p>
                    <div className='flex gap-5 text-lg tracking-tight text-neutral-500'>
                        <p>Shop</p>
                        <p>Splendid Collection</p>
                        <p>Icons</p>
                    </div>
                </div>
            </div>
            <div className='border-t border-b p-5 border-black mx-auto flex items-center justify-center gap-10 uppercase tracking-widest'>
                <p>fashion</p>
                <p>beauty</p>
                <p>home</p>
                <p>lifestyle</p>
                <p>entertaining</p>
                <p>wellness</p>
                <p>Holiday</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar