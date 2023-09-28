import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Navbarr = (id) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const [navbarr, setNavbar] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [t, i18n] = useTranslation();

  const handelToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
      //   console.log(scrollY);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <nav className={navbarr ? "activee" : "navbarr"} id={id.id}>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand>
              <img src="\imgs\logo (1).png" className="imgNav" />
              <img src="/imgs/footer-logo.png" className="imgNavLight hidden" />
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

            <Navbar id="basic-navbar-nav">
              <Nav className="mx-auto ">
                <NavLink to="/" className="navlink">
                  {t("home")}
                </NavLink>
                <NavLink to="/about" className="navlink">
                  {t("about")}
                </NavLink>
                <NavLink to="/projects" className="navlink">
                  {t("projects")}
                </NavLink>
                <NavLink to="/contact" className="navlink">
                  {t("contact")}
                </NavLink>
              </Nav>
            </Navbar>

            <div className="navRight flex justify-center items-center">
              <div>
                <label className="swap swap-rotate  translate-icon">
                  <input
                    type="checkbox"
                    onChange={handelToggle}
                    checked={theme == "light" ? false : true}
                  />

                  <svg
                    className="swap-on fill-current w-8 h-8 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  <svg
                    className="swap-off fill-current w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>

              <div className="translation-div">
                <li>
                  {i18n.language === "ar" && (
                    <button
                      className="px-4 py-1   "
                      onClick={() => i18n.changeLanguage("en")}
                    >
                      ENG
                    </button>
                  )}

                  {i18n.language === "en" && (
                    <button
                      className="px-4 py-1"
                      onClick={() => i18n.changeLanguage("ar")}
                    >
                      AR
                    </button>
                  )}
                </li>
              </div>

              <div className="nav-siderbar">
                <FaBars onClick={showSidebar} className="icon-sidebar" />
                <nav className={sidebar ? "nav-menu-active" : "nav-menu"}>
                  <div className="nav-sidebar-links">
                    <ul>
                      <li>
                        <div className="flex items-center justify-between">
                          <img
                            src="./imgs/footer-logo.png"
                            className="light-mode"
                          />
                          <img src="\imgs\logo.png" className="dark-mode" />

                          <AiOutlineClose
                            onClick={showSidebar}
                            className="close-sidebar"
                          />
                        </div>
                      </li>
                      <li>
                        <NavLink to="/">{t("home")}</NavLink>
                      </li>
                      <li>
                        <Link to="/about">{t("about")}</Link>
                      </li>
                      <li>
                        <Link to="/projects">{t("projects")}</Link>
                      </li>
                      <li>
                        <Link to="/contact">{t("contact")}</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </Container>
        </Navbar>
      </nav>
    </>
  );
};

export default Navbarr;
