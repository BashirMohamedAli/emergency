import React from "react";
import { MyButtonLg } from "../MyButtons/MyButtons";
import { OverlayBg2, OverlayBg3, OverlayBg7 } from "../OverlayBg/OverlayBg";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./WorkProcess.css";
import { useNavigate } from "react-router-dom";

const WorkProcess = () => {
  const navigate = useNavigate();
  return (
    <div className="WorkProcess position-relative">
      <div className="container">
        <SectionTitle style={{ textAlign: "center" }}>
          <h2>How to help Us? </h2>
          <p className="text-center">
            Anyone can contribute to EMERGENCY's activities and help us affirm
            healthcare as a human right
          </p>
        </SectionTitle>
        <div className="WorkProcess-cards">
          <div className="WorkProcess-card shadow-lg bg-light">
            <h1>01</h1>
            <div>
              <h5>Support our activities</h5>
            </div>
            <MyButtonLg
              action={() => navigate("/service")}
              style={{
                background: "#ff5454",
                color: "#fff",
                width: "150px",
                padding: "10px 0",
              }}
            >
              Donate Now
            </MyButtonLg>
          </div>
          <div className="WorkProcess-card active shadow-lg bg-light">
            <h1>02</h1>
            <div>
              <h5>Keep in touch</h5>
            </div>
            <MyButtonLg
              action={() => navigate("/service")}
              style={{
                background: "#fff",
                color: "#1F2278",
                width: "150px",
                padding: "10px 0",
              }}
            >
              Donate Now
            </MyButtonLg>
          </div>
          <div className="WorkProcess-card shadow-lg bg-light">
            <h1>03</h1>
            <div>
              <h5>Work with us</h5>
            </div>
            <MyButtonLg
              action={() => navigate("/contact")}
              style={{
                background: "#ff5454",
                color: "#fff",
                width: "150px",
                padding: "10px 0",
              }}
            >
              Donate Now
            </MyButtonLg>
          </div>
        </div>
      </div>
      {/* for overlay background */}
      <OverlayBg3 style={{ top: "20%", right: "5%" }} />
      <OverlayBg7 style={{ top: "15%", right: "50%" }} />
      <OverlayBg2 style={{ bottom: "0", left: "5%" }} />
    </div>
  );
};

export default WorkProcess;
