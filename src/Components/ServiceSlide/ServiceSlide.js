import React from "react";
// swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode } from "swiper";
import "swiper/css/bundle";
import blogImage from "../../assets/blog-img/bmin.jpg";
import Card from "react-bootstrap/Card";
import { BiTime } from "react-icons/bi";
import { AiOutlineTags } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { Autoplay, FreeMode } from "swiper";
// swiper
import SectionTitle from "../SectionTitle/SectionTitle";
import { UseServices } from "../../hooks";
import { MyButtonLg } from "../MyButtons/MyButtons";
import { useNavigate } from "react-router-dom";
import "./ServiceSlide.css";
import { OverlayBg3, OverlayBg7, OverlayBg8,OverlayBg2, OverlayBg1, OverlayBg6 } from "../OverlayBg/OverlayBg";

const ServiceSlide = () => {
  const [services] = UseServices();
  const navigate = useNavigate();
  return (
    <div className="service-slide position-relative">
      <div className="container service-slide-inner">
        <SectionTitle style={{ textAlign: "center" }}>
          <h2>NEWS AND UPDATES</h2>
          <p className="text-center">
            We provide the special tips and advice’s of heath care treatment and
            high level of best.
          </p>
        </SectionTitle>
        <div className="WorkProcess-cards">
         <Card>
            <a href="#">
              <Card.Img variant="top" src={blogImage} />
            </a>
            <Card.Body>
              <b>
                <a href="#">
                  <small>
                    <AiOutlineTags />
                    {"expertise"}
                  </small>
                </a>
              </b>
              <a href="#">
                <Card.Title>
                  EMERGENCY NGO STATEMENT: EMPLOYMENT OF AFGHAN WOMEN
                </Card.Title>
              </a>
              <p className="time">
                <BiTime />
                {" Wednesday, December 28, 2022"}
              </p>
            </Card.Body>
          </Card>
         <Card>
            <a href="#">
              <Card.Img variant="top" src={blogImage} />
            </a>
            <Card.Body>
              <b>
                <a href="#">
                  <small>
                    <AiOutlineTags />
                    {"expertise"}
                  </small>
                </a>
              </b>
              <a href="#">
                <Card.Title>
                  EMERGENCY NGO STATEMENT: EMPLOYMENT OF AFGHAN WOMEN
                </Card.Title>
              </a>
              <p className="time">
                <BiTime />
                {" Wednesday, December 28, 2022"}
              </p>
            </Card.Body>
          </Card>
          <Card>
            <a href="#">
              <Card.Img variant="top" src={blogImage} />
            </a>
            <Card.Body>
              <b>
                <a href="#">
                  <small>
                    <AiOutlineTags />
                    {"expertise"}
                  </small>
                </a>
              </b>
              <a href="#">
                <Card.Title>
                  EMERGENCY NGO STATEMENT: EMPLOYMENT OF AFGHAN WOMEN
                </Card.Title>
              </a>
              <p className="time">
                <BiTime />
                {" Wednesday, December 28, 2022"}
              </p>
            </Card.Body>
          </Card>
          <Card>
            <a href="#">
              <Card.Img variant="top" src={blogImage} />
            </a>
            <Card.Body>
              <b>
                <a href="#">
                  <small>
                    <AiOutlineTags />
                    {"expertise"}
                  </small>
                </a>
              </b>
              <a href="#">
                <Card.Title>
                  EMERGENCY NGO STATEMENT: EMPLOYMENT OF AFGHAN WOMEN
                </Card.Title>
              </a>
              <p className="time">
                <BiTime />
                {" Wednesday, December 28, 2022"}
              </p>
            </Card.Body>
          </Card>
          <Card>
            <a href="#">
              <Card.Img variant="top" src={blogImage} />
            </a>
            <Card.Body>
              <b>
                <a href="#">
                  <small>
                    <AiOutlineTags />
                    {"expertise"}
                  </small>
                </a>
              </b>
              <a href="#">
                <Card.Title>
                  EMERGENCY NGO STATEMENT: EMPLOYMENT OF AFGHAN WOMEN
                </Card.Title>
              </a>
              <p className="time">
                <BiTime />
                {" Wednesday, December 28, 2022"}
              </p>
            </Card.Body>
          </Card>
          <Card>
            <a href="#">
              <Card.Img variant="top" src={blogImage} />
            </a>
            <Card.Body>
              <b>
                <a href="#">
                  <small>
                    <AiOutlineTags />
                    {"expertise"}
                  </small>
                </a>
              </b>
              <a href="#">
                <Card.Title>
                  EMERGENCY NGO STATEMENT: EMPLOYMENT OF AFGHAN WOMEN
                </Card.Title>
              </a>
              <p className="time">
                <BiTime />
                {" Wednesday, December 28, 2022"}
              </p>
            </Card.Body>
          </Card>

        </div>
      </div>
      <OverlayBg3 style={{ top: "0%", right: "0%" }} />
      <OverlayBg7 style={{ top: "0%", left: "0%" }} />
      <OverlayBg2 style={{ bottom: "-10%", left: "50%" }} />
      <OverlayBg1 style={{ bottom: "-10%", right: "0%" }} />
      <OverlayBg8 style={{ bottom: "-10%", left: "0%" }} />
      <OverlayBg6 style={{ top: "48%", left: "50%" }} />
    </div>
  );
};

export default ServiceSlide;
