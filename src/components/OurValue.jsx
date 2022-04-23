import React from 'react'
import '../styles/OurValue.css'

function OurValue() {
  return (
    <>
        <div className="container">
        <div className="text-center our_value_heading"><h2>OUR VALUES</h2></div>
            <div className="row justify-content-between mb-5 mt-5  pt-3 our_value_row_box">
                <div className="col-md-2 our_value_logo_div pt-3  ">
                     <div className="our_value_logo1 "></div>
                     <h3 className="accountability text-center">Accountability</h3>

                </div>

                <div className="col-md-2  our_value_logo_div pt-3 ">
                     <div className="our_value_logo2 "></div>
                     <h3 className=" accountability text-center">Balance</h3>
                    
                </div>

                <div className="col-md-2  our_value_logo_div pt-3 ">
                     <div className="our_value_logo3 "></div>
                     <h3 className="accountability text-center">Courage</h3>

                </div>

                <div className="col-md-2  our_value_logo_div pt-3 ">
                     <div className="our_value_logo4 "></div>
                     <h3 className="accountability text-center">Honesty</h3>

                </div>

                <div className="col-md-2  our_value_logo_div pt-3">
                     <div className="our_value_logo5 "></div>
                     <h3 className="accountability text-center">Ownership</h3>

                </div>

                <div className="col-md-2 our_value_logo_div pt-3">
                     <div className="our_value_logo6 "></div>
                 <h3 className="accountability text-center">Safety</h3>

                </div>
               
            </div>
        </div>
    </>
  )
}

export default OurValue