import React from 'react'
import Binocular from "../assets/Binocular.jpg"
import crf from "../assets/crf.jpg"
import pr5 from "../assets/pr5.jpg"
import pr6 from "../assets/pr6.jpg"
import pr1 from "../assets/pr1.jpg"
import vr from "../assets/vr.png"
const Gallary = () => {
  return (
    <section className=" body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
         
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src={Binocular} />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full h-full object-center block" src={crf} />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-center block" src={pr6} />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-center block" src={vr} />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full  h-full object-center block" src={pr5}/>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full  h-full object-center block" src={pr1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallary