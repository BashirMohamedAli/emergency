import { MyButtonLg } from "../MyButtons/MyButtons";
import React from "react";
import logo from "../../assets/logo/logo.png";
import fb from "../../assets/social/fb.png";
import linkedin from "../../assets/social/linkdin.png";
import insta from "../../assets/social/insta.png";
import tw from "../../assets/social/tw.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container">
        <div className="row ">
          <div className="col-xl-4 col-lg-6 col-md-12 col-12">
            <div>
              <div className="f-title">
                <img src={logo} alt="meditro" className="f-logo" />
              </div>
              <p className="f-des">
                EMERGENCY Ong Onlus – via Santa Croce 19 – 20122 Milano P.IVA:
                06631330963 – C.F: 97147110155
              </p>
              <span className="pb-2 d-inline-block">Contact Us</span>
              <h3 className="">+39 02 881881</h3>
            </div>
          </div>
          <div className="col-xl-8 col-lg-12 col-md-12 col-12 d-flex justify-content-between">
            <ul className="f-links list-unstyled">
              <div className="f-title">Who We Are</div>
              <li> About Us</li>
              <li> Services</li>
              <li>Booking</li>
              <li>Faq's</li>
            </ul>

            <ul className="f-links list-unstyled">
              <div className="f-title">what we do</div>
              <li> About Us</li>
              <li> Services</li>
              <li>Booking</li>
              <li>Faq's</li>
            </ul>
            <ul className="f-links list-unstyled">
              <div className="f-title">Support Us</div>
              <li> About Us</li>
              <li> Services</li>
              <li>Booking</li>
              <li>Faq's</li>
            </ul>
            <ul className="f-links list-unstyled">
              <div className="f-title">Work with us</div>
              <li> About Us</li>
              <li> Services</li>
              <li>Booking</li>
              <li>Faq's</li>
            </ul>
            {/* <ul className="f-links list-unstyled">
              <div className="f-title">Our Service</div>
              <li> Dental Care</li>
              <li>Cardiac Clinic</li>
              <li>Massege Therapy</li>
              <li>Cardiology</li>
            </ul> */}
          </div>
          {/* <div className="col-xl-4 col-lg-6 col-md-12 col-12">
            <div className="f-title">subscribe now</div>
            <div className="social-links d-flex">
              <img src={fb} alt="fb" className="img-fluid " />
              <img src={insta} alt="fb" className="img-fluid " />
              <img src={linkedin} alt="fb" className="img-fluid " />
              <img src={tw} alt="fb" className="img-fluid " />
            </div>
          </div> */}
        </div>
        <hr />
        <code className="text-center d-block">
          Copyright © 2022 Design & Developed by Cellutech
        </code>
      </div>
    </footer>
  );
};

export default Footer;
