import React from 'react'
import ContactBtn2 from '../../components/ContactButton/btn2'
import Images from "../../json/exhibIMG.json"
import "./style.css"

function Exhibition() {
  return (
    <section className='min-h-[100vh] flex flex-col gap-5 bg-[#032936] text-[#7092a1] md:p-[5rem] p-5'>
      <div className="flex items-end text-section">
        <div className="flex flex-col gap-5">
          <h1 className="md:text-5xl text-3xl">Exhibitions</h1>
          <p className="md:w-2/3 md:ml-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga totam quisquam nisi maxime eaque dicta excepturi at voluptatem autem, ut ipsam et animi eos?
          </p>
        </div>
        <div className=" ">
          <ContactBtn2 />
        </div>
      </div>

      <div className="exhib-images grid grid-cols-3 gap-2 md:gap-6">
        {
          Images.map((item, key) => {
            return (
              <>
                <span key={key} className="md:border-4 border-[#0d3f52]  ">
                  <img src={item.src} alt="" className=' object-cover h-full' />
                </span>
              </>
            )
          })
        }
      </div>

    </section>
  )
}

export default Exhibition
