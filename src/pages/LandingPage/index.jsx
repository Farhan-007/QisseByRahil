import React from "react";
import ContactBtn from "../../components/ContactButton";
import About from "../AboutPage";
import Exhibition from "../ExhibitionPage";
import MyGallery from "../GalleryPage";
import "./style.css"

const LandingPage = () => {
    return (
        <>
            <div className="Landing-wrapper relative px-[5rem]">
                <div className="">

                    {/* LandingPage */}
                    <span className="title-image ">
                        <img className="grayimg relative h-full" src="src/assets/download.jfif" alt="" />
                        <img className="colimg h-[80%] w-[120%] object-cover " src="src/assets/download.jfif" alt="" />
                    </span>

                    <div className="flex items-center justify-center">
                        <div className=" relative flex flex-col justify-center gap-5">

                            <p className="text-sm text-orange-500">
                                #1 photo of the year winner
                            </p>
                            <p className="text-6xl text-white capitalize max-w-min">
                                photographhy helps people to see
                            </p>
                            <p className=" p-6 absolute top-[80%] left-[50%] -right-[100%] text-[18px] text-[#7092a1]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci asperiores placeat esse quisquam repudiandae dolores expedita nemo provident impedit reiciendis totam error quia tenetur eius quae repellat, architecto fugit enim facere! Hic assumenda mollitia neque.
                            </p>


                        </div>

                        <div className="absolute -bottom-10 right-10 ">
                            <ContactBtn />
                        </div>

                    </div>
                </div>
            </div>
            <About />
            <MyGallery />
            {/* <Exhibition /> */}
        </>
    )
}

export default LandingPage