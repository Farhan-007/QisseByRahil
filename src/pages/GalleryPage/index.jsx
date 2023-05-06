import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ImageCarousel from './ImageCarousel';

function MyGallery() {
    return (
        <div className=' min-h-[100vh] bg-[#032936] text-[#7092a1] p-[5rem]'>
            <div className=" flex flex-col items-center justify-center w-full gap-4">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-5xl ml-20">My Gallery</h1>
                    <span className=" h-10 w-[10rem] rounded-[5vw] bg-blue-600"></span>
                </div>
                <div className="flex items-center justify-between w-full">
                    <p className="ml-40 w-[50%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fugiat, ipsam maxime eum illum ratione quas minus quaerat nemo, architecto, iure beatae voluptatibus rem cupiditate?
                    </p>
                    <span className="flex items-center gap-2 p-4">
                        <span className=" flex items-center justify-center border-2 rounded-[50%] border-[#00334d] 
                        text-[#00334d] p-4 text-[2rem] m-auto ">
                            <ArrowBackIcon fontSize='inherit'  />
                        </span>
                        <span className="flex items-center justify-center border-2 rounded-[50%] border-[#fb7b06] text-[#fb7b06] p-4 text-[2rem] m-auto ">
                            <ArrowBackIcon fontSize='inherit' className='rotate-180' />
                        </span>
                    </span>
                </div>
            </div>
            <div className="">
                <ImageCarousel />
            </div>
        </div>
    )
}

export default MyGallery
