import React from "react";
import "../styles/Carousel.css";
import image from "../assests/images/banner.png";

function Carousel() {
  return (
    <>

      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active "
            aria-current="true"
            aria-label="Slide 1"
            style={{
              width: "11px",
              height: "11px",
              borderRadius: "59%",
              backgroundColor: "white",
            }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            style={{
              width: "11px",
              height: "11px",
              borderRadius: "59%",
              backgroundColor: "white",
            }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            style={{
              width: "11px",
              height: "11px",
              borderRadius: "59%",
              backgroundColor: "white",
            }}
          ></button>


        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src={image} className="carousel_img img-fluid" alt="" />
            <div
              className="img_wind"
            >
              <div className="img"></div>
              <p className="proven_renewable_engry">
                Proven Renewable Energy Sources{" "}
              </p>
              <p className="looking_to_join">
                Looking to join Kinetic Renewables group{" "}
              </p>
              <p className="click_here">Click here to see open positions ➡</p>
            </div>
          </div>

          <div class="carousel-item">
            <img src={image} className="carousel_img" alt="" />
            <div
              className="img_wind"
            >
              <div className="img"></div>
              <p className="proven_renewable_engry">
                Proven Renewable Energy Sources{" "}
              </p>
              <p className="looking_to_join">
                Looking to join Kinetic Renewables group{" "}
              </p>
              <p  className="click_here">Click here to see open positions ➡</p>
            </div>
          </div>

          <div className="carousel-item ">
            <img src={image} className="carousel_img" alt="" />
            <div
              className="img_wind"
            >
              <div className="img"></div>
              <p className="proven_renewable_engry">
                Proven Renewable Energy Sources{" "}
              </p>
              <p className="looking_to_join">
                Looking to join Kinetic Renewables group{" "}
              </p>
              <p  className="click_here">Click here to see open positions ➡</p>
            </div>
          </div>
        </div>
       
      </div>
   
    </>
  );
}

export default Carousel;
