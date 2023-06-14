import React from 'react'
import { useRef } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ImageCarousel from './ImageCarousel';
import Images from "../../json/exhibIMG.json"
import { useState } from 'react';

function MyGallery() {

    const ref = useRef(null);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    const [imageClick, setImageClick] = useState(false)

    // const handleClick = () => {
    //     ref.current?.scrollIntoView({ behavior: 'smooth' });
    // };

    return (
        <div className=' md:min-h-[100vh] bg-[#032936] text-[#7092a1] md:p-[5rem] p-5'>
            <div className=" flex flex-col items-center justify-center w-full gap-4">
                <div className="flex items-center justify-between w-full">
                    <h1 className="md:text-5xl text-3xl md:ml-20">My Gallery</h1>
                    <span className=" h-10 w-[10rem] rounded-[5vw] bg-blue-600"></span>
                </div>
                <div className="flex md:flex-row flex-col items-center justify-between w-full">
                    <p className="md:ml-40 md:w-[50%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fugiat, ipsam maxime eum illum ratione quas minus quaerat nemo, architecto, iure beatae voluptatibus rem cupiditate?
                    </p>
                    <span className="flex items-center gap-2 p-4">
                        <button onClick={() => scroll(-500)} className=" flex items-center justify-center border-2 rounded-[50%] border-[#00334d] hover:border-[#7092a1] hover:text-[#7092a1]
                        text-[#00334d] p-4 text-[2rem] m-auto  transition">
                            <ArrowBackIcon fontSize='inherit' />
                        </button>
                        <button onClick={() => scroll(500)} className="flex items-center justify-center border-2 rounded-[50%] border-[#fb7b06] text-[#fb7b06] p-4 text-[2rem] m-auto ">
                            <ArrowBackIcon fontSize='inherit' className='rotate-180' />
                        </button>
                    </span>
                </div>
            </div>
            <div className="">

                <div className="flex flex-col items-center justify-center w-full py-4">
                    <div ref={ref} className="flex items-center gap-5 scroll-smooth overflow-x-scroll w-[85vw] md:w-full md:min-w-0 min-w-[85vw] ">

                        {
                            Images.map((item, key) => {
                                console.log(key)
                                return (
                                    <div onClick={() => setImageClick(!imageClick)} className="md:border-4 border-[#0d3f52] min-w-max " key={key} >
                                        <img className=' grayscale contrast-150 transition-[2s] h-[400px] aspect-[3/4] object-cover' src={item.src} alt="" loading='lazy' />
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyGallery
