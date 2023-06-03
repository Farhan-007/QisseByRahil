import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import "./style.css"

function ContactBtn2() {
    const Arr = ["C", "o", "n", "t", "a", "c", "t", " ", "N", "o", "w", " ", "C", "o", "n", "t", "a", "c", "t", " ", "N", "o", "w", " "]

    return (
        <button className=" cursor-pointer h-[150px] scale-75 md:scale-[1] flex items-center justify-center font-bold text-[#ff912a] ">
            <span className="absolute z-[1] text-[40px] pb-3 ">
                <ArrowOutwardIcon fontSize='inherit'/>
            </span>
            <div className=' contact-btn relative flex items-center justify-center aspect-square rounded-[50%] h-full max-w-min uppercase text-[16px] '>
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

export default ContactBtn2