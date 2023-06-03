import React from 'react'

export default function ImageCard() {

  return (
    <div className=' w-[10rem] flex items-center'>
      <img
      className=' h-[15rem] border-4 rounded border-[#05465c] -rotate-[10deg] object-cover' 
      src="src/assets/food/IMG_20230529_091314_987.jpg" alt="" />
      <img
      className='h-[15rem] border-4 rounded border-[#05465c] -ml-10 mb-2 rotate-[15deg] object-cover' 
      src="src/assets/food/DSC_0384.jpg" alt="" />
      
    </div>
  )
}
