import React from 'react'

function PowermindsetCard({icon: Icon, title: title, text: text }) {
  return (
    <div className="bg-gray-50 rounded-[10px] p-5 space-y-3">
                    <div className='w-[45px] h-[45px] rounded-full bg-[#dcfce7] flex items-center justify-center'>
                    <Icon className='text-[#22c55e] text-2xl' />
                    </div>
                    <h3 className='text-xl tracking-wide font-bold'>{title}</h3>
                    <p className='text-sm tracking-wide text-gray-500 font-[400]'>{text}</p>
                </div>
  );
}

export default PowermindsetCard