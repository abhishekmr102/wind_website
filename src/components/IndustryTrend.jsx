import React from "react";
import "../styles/IndustryTrend.css";
import industry from "../assests/images/trendlogo.png";

function IndustryTrend() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 bg-dange">
          <div className="indust_img"></div>
        </div>
        <div className="col-md-6 bg-succes indust_trends_div">
          <div className="indust_trends">
            <div className="d-flex">
              <img src={industry} className="industry_logo me-5" alt="" />
              <p className=" trend_head ">INDUSTRY TRENDS</p>
            </div>
            <p className="trend_para">
              Our most recent success stories have come from our team working to
              achieve full Turbine installation and handover across Tasmania,
              Victoria, NSW and Western Australia.
            </p>
            <p className="trend_para">
              We have participated in five of GE’s and Vestas latest wind farms
              across Australia, engaged to supply; EHS management, quality
              control, installation, commissioning and specialist testing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustryTrend;
