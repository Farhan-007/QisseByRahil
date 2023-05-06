import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
        <div className="headWrapper z-[1] h-[100px]">
            <div className="header h-full relative">
                <div className="logo">
                    {/* <img src="assets\logo2.png" className='w-[170px] md:w-[200px] ' alt="" /> */}
                    <span className="logo-text flex gap-2 text-2xl uppercase">
                        <p className="">Qisse</p>
                        <p className="">Rahil</p>
                    </span>
                </div>

                <div className={active} >
                    <ul className='smallText' >
                        <li onClick={navToggle}><NavLink to={'/signup'} >About</NavLink></li>
                        <li onClick={navToggle}><NavLink to={'/signup'} >Gallery</NavLink></li>
                        <li onClick={navToggle}><NavLink to={'/signup'} >Exhibitions</NavLink></li>
                        <li onClick={navToggle}><NavLink to={'/signup'} >Contact</NavLink></li>

                    </ul>
                </div>

                <div className="social relative hidden md:flex justify-center items-center mt-[10rem] bg-[#002734] py-6 px-8 pb-14">
                    <div className="flex flex-col gap-4 justify-center items-center">
                        {/* <InstagramIcon /> */}
                        <span className=" block h-[20px] aspect-square bg-white"></span>
                        <span className=" block h-[20px] aspect-square bg-white"></span>
                        <span className=" block h-[20px] aspect-square bg-white"></span>
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