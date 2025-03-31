import React from 'react'

const LifestyleHero = () => {
  return (
    <div className='bg-[#22c55e] py-20 flex flex-col items-center space-y-5 md:space-y-7'>
            <div>
                <h1 className='text-3xl md:text-5xl font-bold tracking-wide text-[#fff] text-center max-w-3xl mx-auto'>Cultivate a Healthy Lifestyle & Mindset </h1>
            </div>
            <div>
                <p className='text-[16px] text-[#fff] text-center max-w-[85%] mx-auto'>Discover holistic approaches to wellness that nourish your body, mind, and spirit for lasting health and happiness. </p>
            </div>        
            <button className='bg-[#fff] text-[#22c55e] px-6 py-2 rounded-full font-medium cursor-pointer hover:scale-105 transition duration-300 ease-in-out text-center'>Begin Your Journey</button>
        </div>
  )
}

export default LifestyleHero