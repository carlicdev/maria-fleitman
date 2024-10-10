import Image from "next/image"

const PostCard = () => {
  return (
    <div className="py-10 border-b border-black">
        <div className='flex flex-wrap items-center justify-center max-w-5xl mx-auto'>
            <div className='w-1/2 p-5  flex items-center justify-center'>
                <div className="border border-black p-5">
                    <Image src={'/cellajane.jpg'} width={400} height={400} />
                </div>
            </div>
            <div className='w-1/2 flex flex-col gap-5 items-center justify-center p-5'>
                <p className='uppercase'>december 1 home</p>
                <p className='capitalize text-3xl tracking-tightest'>the art in our home</p>
                <p className='text-lg text-justify'>Ive received a lot of questions about that art we have in our home, so wanted to share and link whatever I can for you…</p>
                <p className='uppercase tracking-widest'>read the post</p>
            </div>
        </div>
    </div>
  )
}

export default PostCard