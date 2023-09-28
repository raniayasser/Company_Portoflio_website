import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <footer>
        <Container>
          <Row className=" row1">
            <Col lg={2} md={12}>
              <img
                src="./imgs/logo.png"
                alt="loge"
                className="dark-mode-logo"
              />

              <img
                src="./imgs/footer-logo.png"
                alt="loge"
                className="light-mode-logo"
              />
            </Col>

            <Col lg={3} md={6} sm={6}>
              <div className="foot-col">
                <h4>{t("f-contact")}</h4>
                <div className="foot-info">
                  <p>{t("f-address")}</p>
                  <p>
                    <a href="mailto:raniayasser227@gmail.com">
                      raniayasser227@gmail.com
                    </a>
                  </p>

                  <a href="https://wa.me/01096237635" className="whatslink">
                    0109-6237-635
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={6} className="">
              <div className="foot-col">
                <h4>{t("f-links")}</h4>
                <div className="foot-links">
                  <a href="/about">{t("f-works")}</a>
                  <a href="/about">{t("f-affiliate")}</a>
                  <a href="/contact">{t("f-shop")}</a>
                  <a href="/about">{t("f-partners")}</a>
                  <a href="/about">{t("f-reviews")}</a>
                </div>
              </div>
            </Col>

            <Col lg={2} md={6} sm={6}>
              <div className="foot-col">
                <h4>{t("f-studio")}</h4>
                <div className="foot-links ">
                  <a href="/about">{t("aboutSec-head")}</a>

                  <a href="/contact">{t("f-contact")}</a>
                  <a href="/about">{t("f-career")}</a>
                  <a href="/about">{t("f-blog")}</a>
                </div>
              </div>
            </Col>

            <Col lg={2} md={6} sm={6}>
              <div className="foot-col">
                <h4>{t("f-helpCenter")}</h4>
                <div className="foot-links">
                  <a href="/about">{t("faqs")}</a>
                  <a href="/about">{t("team")}</a>
                  <a href="/contact">{t("privacy-policy")}</a>
                  <a href="/about">{t("help")}</a>
                  <a href="/about">{t("servises")}</a>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="row2  pt-[20px] ">
            <Col lg={4} md={12} sm={12}>
              <div>
                <p className="">
                  © 2023
                  <span className="  text-[18px] font-bold px-1">
                    {t("rustic")}
                  </span>
                  {t("made-by")}{" "}
                  <AiFillHeart className=" text-orange-500 inline " />
                  {t("rania")}
                </p>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="f-socialLinks">
                <a href="#">{t("facebook")}</a>
                <a href="#">{t("instagram")}</a>
                <a href="https://github.com/raniayasser">{t("github")}</a>
                <a href="#">{t("twitter")}</a>
                <a href="#">{t("pinterest")}</a>
              </div>
            </Col>
            <Col lg={2} md={12} sm={12}>
              <button
                className="px-4 py-1 font-bold"
                onClick={() => i18n.changeLanguage("en")}
              >
                ENG
              </button>

              <button
                className="px-4 py-1 font-bold  "
                onClick={() => i18n.changeLanguage("ar")}
              >
                AR
              </button>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
