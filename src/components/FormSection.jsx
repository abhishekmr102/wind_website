import React from 'react'
import '../styles/FormSection.css'
import { BsFillPersonFill,BsFillEnvelopeFill,BsChatLeftDotsFill,BsPencilSquare } from "react-icons/bs";

function FormSection() {
  return (
   <div className="container-fluid ">
       <div className="row bg-success justify-content-center form_main_div ">
           <div className="col-md-4  form_div">
             <div className="form_box">
                 <h4 className="text-center get_in_contact">Get in Contact</h4>
                 <p className="text-center we_will_get">We will get back to you asap!</p>


                 <div className="row justify-content-center">
                 <div className="col-md-5">
                     <p className=" f_name_l_name pt-2"><BsFillPersonFill className="fs-4 ms-2 me-2 text-muted"/>First Name</p>
                 </div>
                 <div className="col-md-5">
                 <p className=" f_name_l_name  pt-2">Last Name</p>
                 </div>

                 <div className="col-md-10">
                     <p className="email_box"><BsFillEnvelopeFill className="fs-4 ms-2 me-2 text-muted"/>EMail</p>
                     <p className="email_box"><BsPencilSquare className="fs-4 ms-2 me-2 text-muted"/>Subject</p>
                     <p className="messege"><BsChatLeftDotsFill className="fs-4 ms-2 me-2 text-muted"/>Type Message</p>
                     <p className="submit text-center pt-1">SUBMIT</p>
                 </div>
             </div>

             </div>
           </div>
       </div>
   </div>
  )
}

export default FormSection