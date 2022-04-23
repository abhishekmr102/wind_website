import React from "react";
import "../styles/OurPromise.css";

function OurPromise() {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-md-2 bg-dange">
          <div className="our_promise_img1"></div>
        </div>
        <div className="col-md-2 bg-ligh">
          <div className="our_promise_img2"></div>
        </div>
        <div className="col-md-2 bg-warnin">
          <div className="our_promise_img3"></div>
        </div>

        <div className="col-md-6 bg-succes">
          <div className="">
            <p className="our_promise_head">OUR PROMISE</p>
            <p className="our_promise_para">
              Kinetic Renewable Group Australia continuously strive to improve
              industry standards for both ourselves and our customers. We truly
              believe in always raising our benchmark to become an industry
              leader in our field.
            </p>

            <p className="text-center our_promise_btn">Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPromise;
