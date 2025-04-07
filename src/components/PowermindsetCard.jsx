import React from 'react'
import IconsBox from './IconsBox';

function PowermindsetCard({icon: Icon, title: title, text: text }) {
  return (
    <div className="bg-gray-50 rounded-[10px] p-5 space-y-3">
                    <IconsBox icon={Icon} />
                    <h3 className='text-xl tracking-wide font-bold'>{title}</h3>
                    <p className='text-sm tracking-wide text-gray-500 font-[400]'>{text}</p>
                </div>
  );
}

export default PowermindsetCard