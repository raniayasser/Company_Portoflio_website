import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

// Import Components
import Navbarr from "../Components/Navbarr";
import AboutSec from "./../Components/AboutSec";
import Services from "./../Components/Services";
import Reviews from "./../Components/Reviews";
// import Some Icons

import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

const About = () => {
  const [t] = useTranslation();
  return (
    <>
      <Navbarr />
      <section className="about-hero">
        <Container>
          <Row>
            <Col lg={2} md={4} sm={12}>
              <div className="about-txt-page  hero-txt max-md:mt-[150px] ">
                <p>{t("aboutPage-p")}</p>
                <h1>{t("aboutUs")}</h1>
              </div>
            </Col>
            <Col md={3} sm={12} className="Coll2">
              <div className="whatsappCon ">
                <a href="https://wa.me/01096237635" className="whatslink">
                  contact@rustictudio.co{" "}
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <AboutSec />
      <Services />
      <Reviews />

      <section className="teams">
        <Container>
          <h1>{t("team-head")}</h1>
          <Row>
            <Col lg={4} md={4} sm={6}>
              <div className="team-card ">
                <div className="div">
                  <img src="./imgs/1 (5).jpg" alt="" />

                  <div className="image">
                    <div className="team_icons flex ">
                      <AiOutlineTwitter className="m-2  icon" />
                      <BiLogoFacebook className="m-2 icon" />
                      <AiOutlineInstagram className="m-2 icon" />
                      <AiFillLinkedin className="m-2 icon" />
                    </div>
                  </div>
                </div>
                <div className="team-txt">
                  <h4>{t("team1")}</h4>
                  <p>{t("teamJop1")}</p>
                </div>
              </div>
            </Col>

            <Col lg={4} md={4} sm={6}>
              <div className="team-card ">
                <div className="div">
                  <img src="./imgs/2.jpg" alt="" />

                  <div className="image">
                    <div className="team_icons flex ">
                      <AiOutlineTwitter className="m-2  icon" />
                      <BiLogoFacebook className="m-2 icon" />
                      <AiOutlineInstagram className="m-2 icon" />
                      <AiFillLinkedin className="m-2 icon" />
                    </div>
                  </div>
                </div>
                <div className="team-txt">
                  <h4>{t("team2")}</h4>
                  <p>{t("teamJop2")}</p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4} sm={6}>
              <div className="team-card">
                <div className="div">
                  <img src="./imgs/3.jpg" alt="" />

                  <div className="image">
                    <div className="team_icons flex ">
                      <AiOutlineTwitter className="m-2  icon" />
                      <BiLogoFacebook className="m-2 icon" />
                      <AiOutlineInstagram className="m-2 icon" />
                      <AiFillLinkedin className="m-2 icon" />
                    </div>
                  </div>
                </div>
                <div className="team-txt">
                  <h4>{t("team3")}</h4>
                  <p>{t("teamJop3")}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
