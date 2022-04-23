import React from 'react'
import "../styles/OutLatest.css"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurLatest() {

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
      };


  return (
   <div className="container-fluid ">
       <div className="row  our_row_box">
         <div className="pt-5 text-center">
             <p className="fw-bold text-success pt-3">recent projects</p>
             <h2 className="fw-bolder">Our Latest Case Studies</h2>
             <p className="text-muted">All functions including supply chain value chain project scheduling manufacturing services and <br/>spares,technology , R&D, etc, are integrated to give a complete solutions package.</p>
         </div>

         <Slider {...settings}>
        
           <div className="col-md-2  our_latest_box_1">
               <div className="our_latest_img"></div>
            </div>

            <div className="col-md-2 our_latest_box_1">
               <div className="our_latest_img2"></div>
            </div>

            <div className="col-md-2 our_latest_box_1">
               <div className="our_latest_img3"></div>
            </div>

            <div className="col-md-2 our_latest_box_1">
               <div className="our_latest_img4"></div>
            </div>

            <div className="col-md-2  our_latest_box_1">
               <div className="our_latest_img5"></div>
            </div>
           
           </Slider>
       </div>
   </div>
  )
}

export default OurLatest