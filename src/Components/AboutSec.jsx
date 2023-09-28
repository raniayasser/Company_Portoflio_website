import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// Translate AR && EN
import { useTranslation } from "react-i18next";
const AboutSec = () => {
  const [t, i18n] = useTranslation();

  return (
    <section className="aboutSec">
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <div className="about-sec-txt">
              <p className="parg">{t("aboutSec-head")}</p>
              <h1>{t("aboutSec-header")}</h1>
              <p className="about-prag1 ">{t("aboutSec-parg1")}</p>
              <p className="about-prag2">{t("aboutSec-parg2")}</p>
              <a href="/about">
                <button className="mt-[50px]">{t("hero-btn")}</button>
              </a>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="about-imgs ">
              <img src="/imgs/pattern-1.png" className="pattern" />
              <div>
                <img src="/imgs/about.jpg" alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSec;
