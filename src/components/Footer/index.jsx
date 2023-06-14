// import { Facebook, FacebookOutlined, Instagram, LinkedIn, Gmail, Mail} from '@mui/icons-material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { NavLink } from 'react-router-dom'
import './style.css'

const Footer = () => {
    return (
        <>
            <footer className="footer flex flex-col items-center justify-center  text-[#7092a1] smallText shadow-2xl px-5">
                <div className="container max-w-[1200px] flex flex-col gap-5 py-10 border-t-4 border-[#0d3f52]">
                    <div className="flex items-center justify-between gap-2 md:gap-5">
                        <h1 className=" md:text-5xl text-lg">rahilkhan9770027294@gmail.com</h1>
                        <button className="email-button text-xl md:text-6xl text-[#ff912a] border-2 rounded-[50%] border-[#ff912a] p-2 ">
                            <a className='flex items-center' href="mailto:rahilkhan9770027294@gmail.com">
                                <ArrowOutwardIcon fontSize='inherit' />
                            </a>
                        </button>
                    </div>
                    <div className="flex items-center">
                        <div className="navlinks">
                            <ul className="flex md:flex-row text-xs md:text-sm md:font-semibold md:items-center gap-2 md:gap-16">
                                <li className="">
                                    <a href="" className="">About</a>
                                </li>
                                <li className="">
                                    <a href="" className="">Gallery</a>
                                </li>
                                <li className="">
                                    <a href="" className="">Exhibitions</a>
                                </li>
                                <li className="">
                                    <a href="" className="">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="social-links">

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer