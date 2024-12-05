import Image from 'next/image'
import ContactForm from '../components/ContactForm'
import ReelsSection from '../components/ReelsSection'

const Contact = () => {
  return (
    <main>
      <div className='w-full flex flex-wrap'>
          <div className='order-2 lg:order-1 w-full lg:w-1/2 bg-neutral-100 flex flex-col items-center justify-center p-5'>
            <ContactForm />
          </div>
          <div className='order-1 lg:order-2 w-full lg:w-1/2'>
              <Image src={'/maria-fondo.jpg'} alt='uno' width={1000} height={1000} />
          </div>
      </div>
      <div className='w-full bg-[#c2ac92] py-20 border-y border-black flex justify-center items-center gap-5'>
        <p className='text-3xl'>For all inquires please contact: </p>
        <span className='text-lg '>marria_33@hotmail.com</span>
      </div>
      <ReelsSection />
    </main>
  )
}

export default Contact