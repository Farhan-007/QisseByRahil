import React from 'react'
import ContactBtn2 from '../../components/ContactButton/btn2'

function About() {
  return (
    <div className='min-h-[100vh] bg-[#032936] text-[#7092a1] flex items-center md:px-[5rem] p-5'>
      <div className=" flex flex-col gap-5">
        <div className="heading ">
          <h1 className=" md:text-5xl text-3xl ">About <br></br> Rahil khan</h1>
        </div>
        <div className="heading-bottom-sec flex md:flex-row flex-col items-center gap-5">
          <span className="hidden md:block">
            <ContactBtn2 />
          </span>
          <div className="img relative flex items-center ">
            <img src="src/assets/intro/r.jpg" alt="" className=' grayscale md:h-[450px] md:w-[350px] h-[300px] -ml-5 object-cover' />
            <img src="src/assets/intro/r.jpg" alt="" className="absolute aspect-square scale-125 top-[17%] md:-right-[20px] right-2 md:h-[60%] h-[230px] w-[230px] md:w-[80%] object-cover " />
          </div>
          <div className=" md:w-1/2 pt-5 md:p-0">
            <p className=' md:ml-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, inventore obcaecati placeat temporibus, totam dignissimos amet earum fuga ex ratione nihil hic, in debitis. Inventore.
              <br /> <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur itaque, modi quisquam corrupti repellendus, adipisci illum deleniti officia ut ex blanditiis nulla, enim quas iusto neque quibusdam quidem numquam inventore perferendis est obcaecati voluptate ducimus.
              </p>
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About