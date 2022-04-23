import React from "react";
import "../styles/Footer.css";
import { BsFillEnvelopeFill,BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div className="container-fluid">
    <div className="row">
        <div className="col-md-10"></div>
    </div>
      <div className="row row_footer">
      <div className="have_questions"></div>
        <div className="col-md-4">
          <div className="line"></div>
          <div className="krg_logo_footer"></div>
        </div>

        <div className="col-md-4">
          <p className="head_office">Head Office Queensland</p>
          <div className="line_2"></div>
          <p className="email_footer">EMAIL : lh@krgroup.com.au</p>
        </div>
        <div className="col-md-4">
          <p className="Iso_para">
            ISO 14001 / ISO 45001 / ISO 9001 and a strong supporter of ARENA,
            SEQ,CEC and TAFE
          </p>
          <p className="our_global_footer">OUR GLOBAL PRESENCE</p>
          <p className="Krg_with_head">
            KRG with head office in Australia but we have internal offices in
            India / Vietnam / Japan / North America
          </p>
          <div className="footer_logo_div d-flex">
              <p className="footer_logos text-center ms-5 me-2"><BsFillEnvelopeFill className=""/></p>
              <p  className="footer_logos "><BsLinkedin  className="ms-2"/></p>
          </div>

        </div>
        <hr className="footer_line_hr"/>
        <p className="text-center footer_kinetic_c">© 2019 Kinetic Renewables Group PVT. LTD.  ABN 26 626 614 220</p>
      </div>
    </div>
  );
}

export default Footer;
