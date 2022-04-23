import React from "react";
import "../styles/Clients.css";

function Clients() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-12">
          <div className="client_img_div">
            <p className="clients">CLIENTS</p>
            <p className="client_para">
              Our most recent success stories have come from our team working to
              achieve full Turbine installation and handover across Tasmania,
              Victoria, NSW and Western Australia.{" "}
            </p>
            <p className="client_para">
              We have participated in five of GE’s and Vestas latest wind farms
              across Australia, engaged to supply; EHS management, quality
              control, installation, commissioning and specialist testing.
              <hr className="client_hr"/>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
