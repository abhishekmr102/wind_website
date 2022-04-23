import React from 'react'
import '../styles/Countries.css'

function Countries() {
  return (
  <div className="container">
      <div className="row mt-5">
          <div className="col-md-10">
            <div className="row d-flex rounded-3 justify-content-between main-line">
                <div className="col-md-2 box_1"> </div>
                <div className="line_div line_div1">
                <p className="pt-2 countries_name">H/O:Australia</p>
                </div>
              
                <div className="col-md-2 box_2"></div>
                <div className="line_div line_div2">
                <p className="pt-2 countries_name">Vietnam</p>

                </div>

                <div className="col-md-2 box_3"></div>
                <div className="line_div line_div3">
                <p className="pt-2 countries_name">Japan</p>
                </div>

                <div className="col-md-2 box_4"></div>
                <div className="line_div line_div4">
                <p className="pt-2 countries_name">India</p>

                </div>
                <div className="col-md-2 box_5"></div>
                
            </div>
              {/* <hr className="hr_tag"/> */}
          </div>
      </div>
  </div>
  )
}

export default Countries