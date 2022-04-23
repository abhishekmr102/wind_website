import React from "react";
import '../styles/OurVision.css'

function OurVision() {
  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col-md-8">
          <div className="our_vision_div">
            <p className="text-center our_vision_heading">OUR VISION</p>
            <p className="text-center our_vision_para">
              KINETIC RENEWABLES GROUP AUSTRALIA (KRGA) was<br/> established in 2017
              with the vision and commitment of<br/> supporting the renewable energy
              industry and working<br/> towards a cleaner brighter future.
            </p>

            <p className="text-center our_vision_btn">Read More</p>
          </div>
        </div>


        <div className="col-md-4">
         <div className="our_vision_small_img_box">
            <div className="our_vision_small_img">
            </div>
            <div className="our_vision_small_img2 mt-4"></div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default OurVision;
