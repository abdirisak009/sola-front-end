import React from 'react'
import { FaRegBell } from "react-icons/fa";
import khudaar from '../assets/images/khudaar.jpg'
import { BsJournalArrowUp } from "react-icons/bs";
import StressManagementCard from './StressManagementCard';

const StressManagement = () => {
  return (
    <div className='space-y-10'>
        <div className='space-y-2 pt-7'>
            <h1 className='text-3xl md:text-4xl font-bold tracking-wide text-[#000] text-center max-w-3xl mx-auto'>Stress Management</h1>
            <p className='text-[16px] text-gray-500 text-center max-w-[85%] mx-auto'>Effective techniques to reduce stress and create more balance in your life </p>
        </div>
        <div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6'>
            <div className='max-w-sm md:max-w-[90%] lg:max-w-1/2 bg-white rounded-[10px] overflow-hidden'>
                <div className=''>
                    <img src={khudaar} alt="deepBreathing image" className='w-full h-[295px] object-cover overflow-auto'/>
                </div>
                <div className='p-5 space-y-3'>
                    <h3 className='text-xl tracking-wide font-bold'>Meditation Practice</h3>
                    <p className='text-sm tracking-wide text-gray-500 font-[400]'>Regular meditation reduces stress hormones, improves focus, and promotes emotional regulation. Even 5-10 minutes daily can make a significant difference</p>
                </div>
            </div>
            <div className='max-w-sm md:max-w-[90%] lg:max-w-1/2 space-y-7'>
                
                <StressManagementCard  icon={FaRegBell} title="Deep Breathing" text="Activates the parasympathetic nervous system, triggering relaxation. Try the 4-7-8 technique: inhale for 4 counts, hold for 7, exhale for 8." />

                <StressManagementCard icon={BsJournalArrowUp} title="Journaling" text="Writing down thoughts and feelings helps process emotions and gain perspective. Spend 10 minutes daily with free-form writing or guided prompts."/>
            </div>
        </div>
    </div>
  )
}

export default StressManagement