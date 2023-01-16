import React from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Pagination from "react-bootstrap/Pagination";

// swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode } from "swiper";
import "swiper/css/bundle";
import blogImage from "../../assets/blog-img/bmin.jpg";
import Card from "react-bootstrap/Card";
import { BiTime } from "react-icons/bi";
import { AiOutlineTags } from "react-icons/ai";

import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { UseServices } from "../../hooks";
import { MyButtonLg } from "../../Components/MyButtons/MyButtons";
import { useNavigate } from "react-router-dom";
import "./blog.css";
import {
  OverlayBg3,
  OverlayBg7,
  OverlayBg8,
  OverlayBg2,
  OverlayBg1,
  OverlayBg6,
} from "../../Components/OverlayBg/OverlayBg";

const Blog = () => {
  return (
    <>
      <Header></Header>
      <div className="service-slide position-relative">
        <div className="container service-slide-inner">
          <SectionTitle style={{ textAlign: "center" }}>
            <h2>NEWS AND UPDATES</h2>
            <p className="text-center">
              We provide the special tips and advice’s of heath care treatment
              and high level of best.
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
          <Pagination size="lg" className="justify-content-center">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>

        <OverlayBg3 style={{ top: "0%", right: "0%" }} />
        <OverlayBg7 style={{ top: "0%", left: "0%" }} />
        <OverlayBg2 style={{ bottom: "-10%", left: "50%" }} />
        <OverlayBg1 style={{ bottom: "-10%", right: "0%" }} />
        <OverlayBg8 style={{ bottom: "-10%", left: "0%" }} />
        <OverlayBg6 style={{ top: "48%", left: "50%" }} />
      </div>

      <Footer />
    </>
  );
};

export default Blog;
