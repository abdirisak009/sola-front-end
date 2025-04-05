import React from 'react'
import IconsBox from './IconsBox';

const StressManagementCard = ({icon: Icon, title: title, text: text }) => {
  return (
    <div className="bg-white rounded-[10px] px-5 py-7 space-y-3">
        <div className='w-[45px] h-[45px] rounded-full bg-[#dcfce7] flex items-center justify-center'>
          <IconsBox icon={Icon} />
        </div>
        <h3 className='text-xl tracking-wide font-bold'>{title}</h3>
        <p className='text-sm tracking-wide text-gray-500 font-[400]'>{text}</p>
    </div>
  )
}

export default StressManagementCard