import React from "react";
import "../styles/ReadOur.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    id:1,
    img:"",
    para:"| December 9, 2019 .",
    span:"By Developers",
    heading:"Helping Companies in Their Green Transition",
    paragraph:"|Recco has received inceived inquiries seeking clarification of job offers..."
  },

  {
    id:1,
    img:"",
    para:"| December 9, 2019 .",
    span:"By Developers",
    heading:"Helping Companies in Their Green Transition",
    paragraph:"|Recco has received inceived inquiries seeking clarification of job offers..."
  },

  {
    id:1,
    img:"",
    para:"| December 9, 2019 .",
    span:"By Developers",
    heading:"Helping Companies in Their Green Transition",
    paragraph:"|Recco has received inceived inquiries seeking clarification of job offers..."
  },

  {
    id:1,
    img:"",
    para:"| December 9, 2019 .",
    span:"By Developers",
    heading:"Helping Companies in Their Green Transition",
    paragraph:"|Recco has received inceived inquiries seeking clarification of job offers..."
  },
]

function ReadOur() {

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };



  return (
    <div className="container-fluid read_our_container_box ">
      <div className="row  read_our_row_box">
          
          <div className="top_heading_div">
          <p className="text-success fw-bold pt-">| recent news</p>
          <h2 className="mb-5">Read Our Latest News</h2>
          </div>

      <Slider {...settings}>
       
     {data.map((value)=>{
       return(
        <div className="col-12 col-sm-6 col-md-3 ">
        <div className="read_our_box">
          <div className="read_our_img">
            <p className="solar_panel text-center ms-4 ">SOLAR PANEL</p>
          </div>
          <div className="ms-4">
            <p className="text-success fw-bold pt-3">
               {value.para}
              <span className="text-muted ">{value.span}</span>
            </p>
            <h4>{value.heading}</h4>
            <p className="text-muted">
                  {value.paragraph}
            </p>
          </div>
          </div>
        </div>

       )
     })}
        </Slider>


      </div>
    </div>
  );
}

export default ReadOur;
