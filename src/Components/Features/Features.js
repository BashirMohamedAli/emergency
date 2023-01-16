import React from "react";
import featureIcon1 from "../../assets/features-icon/36c2306c-6dfe-4bcc-b35d-9800d52ff2de.svg";
import featureIcon2 from "../../assets/features-icon/4922db64-349d-4e40-ae0a-5872bc012607.svg";
import featureIcon3 from "../../assets/features-icon/ab7ad438-e320-414e-a206-28e1752343dd.svg";
import featureIcon4 from "../../assets/features-icon/d7d3df0c-daae-49e7-83a2-682ff0bdf44b.svg";
import "./Features.css";
import { MyButtonLg } from "../MyButtons/MyButtons";


const Features = () => {
  return (
    <div className="features">
      <MyButtonLg
               
                className={"hero-btn"}
                style={{
                  width: "200px",
                  padding: "12px 0",
                  background: "#E32119",
                }}
              >
               Donate Now
              </MyButtonLg>
    </div>
  );
};

export default Features;
