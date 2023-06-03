import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import "./style.css"

function ContactBtn() {
    const Arr = ["C", "o", "n", "t", "a", "c", "t", " ", "N", "o", "w", " ", "C", "o", "n", "t", "a", "c", "t", " ", "N", "o", "w", " "]

    return (
        <button className=" cursor-pointer scale-75 md:scale-[1] flex items-center justify-center text-[#001a28] font-bold rounded-[50%] ">
            <span className="absolute z-[1] text-[40px] pb-3 rounded-[50%] ">
                <ArrowOutwardIcon fontSize='inherit'/>
            </span>
            <div className=' contact-btn relative flex items-center justify-center h-[150px] aspect-square rounded-[50%] text-[#001a28] border-[5px]  border-[#001a28] uppercase text-[16px] bg-gradient-to-br from-[#ffd2ad] via-[#ff7c00] to-[#ffd2ad]'>
                <h1 >

                    {
                        Arr.map((item, key) => {
                            console.log(item, (6 * (key + 1)))
                            return (
                                <span className={`char${key + 1}`}>
                                    {item}
                                </span>
                            )
                        })
                    }
                </h1 >
            </div>
        </button>
    )
}

export default ContactBtn
