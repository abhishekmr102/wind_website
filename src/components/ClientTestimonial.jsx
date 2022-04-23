import React from "react";
import "../styles/ClientTestimonial.css";

function ClientTestimonial() {
  return (
    <div className="container-fluid ">
      <div className="row justify-content-center client_row_div ">
         {/* <div className=""></div>
        <div className=""></div>  */}
        <div className="col-md-5 client_img float-end"></div>

        <div className="col-md-5  client_testimonial_right_div">
          <div className="ms-3">
            <p className="text-success fw-bold pt-5">| some facts</p>
            <h3 className="text-light ">Clients Testimonials</h3>
            <p  className="text-light text-muted">
              "|Recco is among the world's leading renewable energy solutions
              provider that is revolutionising and redefining the way
              sustainable energy sources are harnessed across Asia Australia,
              Europe, Africa and the Americas."
            </p>
            <p className="fw-bold text-light pt-2">Arnold Wilson</p>
            <p className="text-light">Client of Company</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientTestimonial;
