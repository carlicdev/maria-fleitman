"use client"

import { redirect } from 'next/navigation'
import { useState } from 'react'

const SubscribeForm = ( ) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
  
        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                  email: email
                }) 
            })
    
            const data = await response.json();

            if (data.status === 200) { 
              setEmail('')
              setSuccess(true)
            }
        } catch (err) {
            console.log('error:', err)
        }
        
    }

    if (success) {
        redirect('/confirmation')
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit} className='flex flex-wrap justify-around'>
            <input
                placeholder='NAME'
                type='text'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full lg:w-1/3 placeholder-white text-lg outline-none bg-transparent text-white border-b border-white my-2 py-1 px-2 rounded '
            />
            <input
                placeholder='EMAIL'
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full lg:w-1/3 placeholder-white text-lg outline-none bg-transparent text-white border-b border-white my-2 py-1 px-2 rounded '
            />
            <button 
                type='submit'
                className='uppercase text-2xl  w-full py-5 mt-4 mb-2 mx-auto text-2xl'>
                {!success ? 'Subscribe' : 'Te Has Suscrito'}
            </button>
        </form>
        {error && (
            <p className='text-red-500'>{error} </p>
        )}

    </div>
  )
}

export default SubscribeForm