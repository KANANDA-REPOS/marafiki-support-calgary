import React from 'react'

const Hero = () => {
  return (
    <>
        <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
            <div className='absolute top-0 left-0 bottom-0 bg-black/70 z-[2]' />

            <div>
                <h1>Heading</h1>
                <h3>Message</h3>
                <button>Blogs</button>
            
            </div>
        
        </div>
    </>
  )
}

export default Hero
