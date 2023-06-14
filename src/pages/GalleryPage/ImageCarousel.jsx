import React from 'react'
import Images from "../../json/exhibIMG.json"


function ImageCarousel() {
    return (
        <div className="">

            <div className="flex flex-col items-center justify-center w-full py-4">
                <div className="flex items-center gap-5 overflow-x-scroll w-[85vw] md:w-full md:min-w-0 min-w-[85vw] ">

                    {
                        Images.map((item, key) => {
                            return (
                                <>
                                    <span key={key} className="">
                                        {/* <img src={item.src} alt="" className="" /> */}
                                    </span>
                                </>
                            )
                        })
                    }


                    {/* <span key={key} className="border-4 border-[#0d3f52] min-w-max ">
                        <img className=' grayscale contrast-150 transition-[2s] h-[400px] aspect-[3/4] object-cover' src={item.src} alt="" />
                    </span> */}

                    {/* <span className="border-4 border-[#0d3f52] min-w-max ">
                        <img className=' grayscale contrast-150 hover:cursor-[url(src/assets/download.jfif)] transition-[2s] h-[400px] aspect-[3/4] object-cover' src="src/assets/download.jfif" alt="" />
                    </span>
                    <span className=" h-[400px] w-min aspect-[3/4] object-contain bg-blue-500"></span>
                    <span className=" h-[400px] w-min aspect-[3/4] object-contain bg-blue-500"></span>
                    <span className=" h-[400px] w-min aspect-[3/4] object-contain bg-blue-500"></span>
                    <span className=" h-[400px] w-min aspect-[3/4] object-contain bg-blue-500"></span>
                    <span className=" h-[400px] w-min aspect-[3/4] object-contain bg-blue-500"></span> */}
                </div>
            </div>
        </div>
    )
}

export default ImageCarousel
