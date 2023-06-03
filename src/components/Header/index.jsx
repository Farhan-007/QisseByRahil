import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


import "./style.css"

export default function Header() {
    const [active, setActive] = useState("menu");
    const [togglerIcon, setIcon] = useState("navToggler");

    const navToggle = () => {
        active === 'menu' ?
            setActive('menuActive menu') :
            setActive('menu')

        togglerIcon === 'navToggler' ?
            setIcon('navToggler toggle') :
            setIcon('navToggler')
    }

    console.log(active);

    return (
        <div className="headWrapper z-[2] h-[100px]">
            <div className="header h-full relative">
                <div className="logo w-[100px]">
                    <img src="src/assets/logo/rahil_boi.png" className=' md:scale-[4] scale-[2]' alt="" />
                    {/* <span className="logo-text flex gap-2 text-2xl uppercase">
                        <p className="">Qisse</p>
                        <p className="">Rahil</p>
                    </span> */}
                </div>

                <div className={active} >
                    <ul className='smallText' >
                        <li onClick={navToggle}>About</li>
                        <li onClick={navToggle}>Gallery</li>
                        <li onClick={navToggle}>Exhibitions</li>
                        <li onClick={navToggle}>Contact</li>

                    </ul>
                </div>

                <div className="social relative hidden md:flex justify-center items-center mt-[10rem] bg-[#002734] py-6 px-8 pb-14">
                    <div className="flex flex-col gap-4 justify-center items-center text-white">
                        <a target="_blank" href="https://www.instagram.com/_ra.hil/">
                            <InstagramIcon />
                        </a>
                        <a target="_blank" href="https://twitter.com/cali_athlete1">
                            <TwitterIcon />
                        </a>
                        <a target="_blank" href="">
                            <YouTubeIcon />
                        </a>
                        <span className=" absolute -bottom-3 block text-white bg-orange-500 -rotate-90 p-[3px] px-[5px]">follow me</span>
                    </div>
                </div>

                <div onClick={navToggle} className={togglerIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

            </div>
        </div>
    )

}