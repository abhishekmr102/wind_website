import React from "react";
import "../styles/Card.css";

function Card() {
  return (
    <>
      <div className="container-flui">
      <div className="our_services_div">
        <h3 className="text-center our_services ">OUR SERVICES</h3>
      </div>
      </div>

      <div className="container">
        <div className="row mb-5 col-xxl-12">
          <div className="col-md-3 col-12 pt-5">
            <div className="card_box col-md-12 mx-auto">
              <h3 className="managed_heading">Managed staff Service Provider</h3>
              <p className="learn_more">Learn More</p>
            </div>
          </div>
          <div className="col-md-3 col-12 down_card">
          <div className="card_box col-md-12 mx-auto">
              <h3 className="managed_heading">Managed staff Service Provider</h3>
              <p className="learn_more">Learn More</p>
            </div>
          </div>
          <div className="col-md-3 col-12 down_card">
            <div className="card_box col-md-12 mx-auto">
              <h3 className="managed_heading">Managed staff Service Provider</h3>
              <p className="learn_more">Learn More</p>
            </div>
          </div>
          <div className="col-md-3 col-12 pt-5">
          <div className="card_box col-md-12 mx-auto">
              <h3 className="managed_heading">Managed staff Service Provider</h3>
              <p className="learn_more">Learn More</p>
            </div>
          </div>
           
           <div className="pt-5">
           <p className="text-center more_services">More Services</p>
           </div>

           <div className="pt-4">
             <p className="powering_p_tag">POWERING A SUSTAINABLE FUTURE, ONE PROJECT AT A TIME</p>
           </div>

           <div className="">
             <p className="text-center we_have_h_tag">We have designed many renewable energy<br/>facilities across multiple countries</p>
           </div>

        </div>
      </div>
    </>
  );
}

export default Card;
