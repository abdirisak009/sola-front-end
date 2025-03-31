import React from 'react'
import PowermindsetCard from './PowermindsetCard';
import { LuBrain } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegFaceSmile } from "react-icons/fa6";

const PowerofMindset = () => {
  return (
    <>
        <div className='max-w-sm md:max-w-6xl mx-auto my-25'>
            <div className='space-y-2'>
                <h1 className='text-3xl md:text-4xl font-bold tracking-wide text-[#000] text-center max-w-3xl mx-auto'>The Power of Mindset </h1>
                <p className='text-[16px] text-gray-500 text-center max-w-[85%] mx-auto'>Your thoughts shape your reality. Cultivate a positive mindset to transform your health journey</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                <PowermindsetCard icon={LuBrain} title="Growth Mindset" text="Embrace challenges as opportunities for growth. View setbacks as temporary and valuable learning experiences rather than permanent failures"/>

                <PowermindsetCard icon={FaRegFaceSmile} title="Positive Self-Talk" text="The way you speak to yourself matters. Replace self-criticism with compassionate, encouraging internal dialogue to build confidence and resilience."/>
                
                <PowermindsetCard icon={FaRegFileAlt} title="Gratitude Practice" text="Regularly acknowledging what you're grateful for shifts focus from what's lacking to what's abundant, fostering contentment and positive emotions."/>    
            </div>
            
        </div>
    </>
  )
}

export default PowerofMindset