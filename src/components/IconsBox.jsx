import React from 'react'
import { FaRegMoon } from "react-icons/fa";

const IconsBox = ({icon:Icon}) => {
  return (
    <div className='w-[45px] h-[45px] rounded-full bg-[#dcfce7] flex items-center justify-center'>
        <Icon className='text-[#22c55e] text-2xl' />
    </div>
  )
}

export default IconsBox