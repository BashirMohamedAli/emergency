import { MyButtonLg } from "../MyButtons/MyButtons";
import { useNavigate } from "react-router-dom";
import {
  OverlayBg1,
  OverlayBg3,
  OverlayBg4,
  OverlayBg5,
} from "../OverlayBg/OverlayBg";
import React from "react";
import Header from "../Header/Header";
import heroThumb from "../../assets/hero-img/hero-min.png";
import "./HeroBanner.css";

const HeroBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-banner position-relative">
      {/* header is here */}
      <Header />
      {/* banner content is here in 2 column at large and 1 at medium  */}
      <div className="hero-banner-content container ">
        <div className="row  justify-content-center align-items-center ">
          {/* left side */}
          <div className="col-xl-7 col-lg-7 col-md-6 col-sm-6 col-12">
            <div className="hero-banner-content-left">
              <h6>Welcome</h6>
              <h1>Treating a patient every minute since 1994.</h1>
              <MyButtonLg
                action={() => navigate("/about")}
                className={"hero-btn"}
                style={{
                  width: "200px",
                  padding: "12px 0",
                  background: "#E32119",
                }}
              >
                read more
              </MyButtonLg>
            </div>
          </div>
          {/* right side */}
          <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12">
            <div className="hero-banner-content-right">
              <figure>
                <img src={heroThumb} alt="heroThumb" className="img-fluid" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* for overlay animation on background */}
      {/* <OverlayBg1 style={{ top: "50%", left: "20px" }} /> */}
      <OverlayBg1 style={{ top: "20%", right: "20%" }} />
      <OverlayBg5 style={{ top: "25%", left: "20%" }} />
      <OverlayBg3 style={{ top: "30%", left: "50%" }} />
      <OverlayBg4 style={{ top: "50%", left: "50%" }} />
      <OverlayBg5 style={{ bottom: "-10%", left: "50%" }} />
      <OverlayBg1 style={{ bottom: "-10%", right: "0%" }} />
      <OverlayBg4 style={{ bottom: "-10%", left: "0%" }} />
    </div>
  );
};

export default HeroBanner;
