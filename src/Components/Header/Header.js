import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { MyButtonLg } from "../MyButtons/MyButtons";
import React,{useState, useEffect} from 'react';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import Navbar from "react-bootstrap/Navbar";


import "./Header.css";
import logo from "../../assets/logo/logo.png";


const Header = () => {
	const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };
  let boxClass = ["nav__container"];
  if(isMenu) {
    boxClass.push('responsive__nav__show');
  }else{
    boxClass.push('');
  }
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  let boxClassSubMenu = ["sub__menus"];
  if(isMenuSubMenu) {
    boxClassSubMenu.push('sub__menus__Active');
  }else {
    boxClassSubMenu.push('');
  }
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    // class="primary-header  fixed-top shadow-sm bg-light navbar navbar-expand-lg navbar-light"
    <div style={{ marginTop: "8rem" }}>
      <div
        className={`primary-header  fixed-top ${
          sticky ? "shadow-sm bg-light" : "bg-transparent"
        }`}
      >
        <div className="navgaap">
          {isResponsiveclose === true ? (
            <>
              <span></span>
              <span
                className="menubar__button"
                style={{ display: "none" }}
                onClick={toggleClass}
              >
                {" "}
                <FiXCircle />{" "}
              </span>
            </>
          ) : (
            <>
              <a href="/">
                <img
                  src={logo}
                  alt="Emergency"
                  className="logo2"
                  style={{ display: "none" }}
                />
              </a>
              <span
                className="menubar__button"
                style={{ display: "none" }}
                onClick={toggleClass}
              >
                {" "}
                <FiAlignRight />{" "}
              </span>
            </>
          )}
        </div>
        <ul className={boxClass.join(" ")}>
          <span>
            <a href="/">
              <img src={logo} alt="MediTro" className="logo" />
            </a>
          </span>

          {/* Approach #1 --- Active  */}
          <div className="gaap">
            <li onClick={toggleSubmenu} className="sub__menus__arrows">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/about"
              >
                Who We are <FiChevronDown />{" "}
              </NavLink>
              <ul className={boxClassSubMenu.join(" ")}>
                <li>
                  <NavLink
                    onClick={toggleClass}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/Invoice"
                  >
                    Dashboard 1
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={toggleClass}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/user/admin"
                  >
                    Dashboard 2
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={toggleClass}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/user/admin"
                  >
                    Dashboard 2
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={toggleClass}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/user/admin"
                  >
                    Dashboard 2
                  </NavLink>
                </li>
                
              </ul>
            </li>
            <li onClick={toggleSubmenu} className="sub__menus__arrows">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/service"
              >
                what we do <FiChevronDown />{" "}
              </NavLink>
              <ul className={boxClassSubMenu.join(" ")}>
                <li>
                  <NavLink
                    onClick={toggleClass}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/Invoice"
                  >
                    Dashboard 1
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={toggleClass}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/user/admin"
                  >
                    Dashboard 2
                  </NavLink>
                </li>
              </ul>
            </li>
            <li onClick={toggleSubmenu} className="sub__menus__arrows">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/about"
              >
                support us <FiChevronDown />{" "}
              </NavLink>
              <ul className={boxClassSubMenu.join(" ")}>
                <li>
                  <NavLink
                    onClick={toggleClass}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/Invoice"
                  >
                    Dashboard 1
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={toggleClass}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/user/admin"
                  >
                    Dashboard 2
                  </NavLink>
                </li>
              </ul>
            </li>
            <li onClick={toggleSubmenu} className="sub__menus__arrows">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/service"
              >
                work with us <FiChevronDown />{" "}
              </NavLink>
              <ul className={boxClassSubMenu.join(" ")}>
                <li>
                  <NavLink
                    onClick={toggleClass}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/Invoice"
                  >
                    Dashboard 1
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={toggleClass}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/user/admin"
                  >
                    Dashboard 2
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                onClick={toggleClass}
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/about"
              >
                pressroom
              </NavLink>
            </li>
            <div className="donate">
            <MyButtonLg
                action={() => navigate("/login")}
                className={"header-btn"}
                style={{
                  width: "150px",
                  padding: "7px 0",
                  marging: 0,
                  background: "red",
                  color: "#fff",
                }}
              >
                {" "}
                Donate
              </MyButtonLg>
              </div>
          </div>
         
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
