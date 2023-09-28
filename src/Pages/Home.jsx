import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from "react-bootstrap";
// import some Icons
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";

// Translate AR && EN
import { useTranslation } from "react-i18next";

// import Components
import Services from "../Components/Services";
import ProjectsSlider from "../Components/ProjectsSlider";
import AboutSec from "../Components/AboutSec";
import Reviews from "../Components/Reviews";
import PricingTable from "../Components/PricingTable";
import Navbarr from "../Components/Navbarr";
const Home = () => {
  const [t, i18n] = useTranslation();

  return (
    <>
      <Navbarr />

      <section className="banner">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
        >
          <SwiperSlide>
            <Row>
              <Col md={2} className=" max-md:hidden">
                <div className="icons mt-[300px]">
                  <p>2023</p>
                  <div className="socialIcon mt-[200px]">
                    <a href="#">
                      <AiOutlineGoogle className="my-12 text-xl" />
                    </a>

                    <a href="https://github.com/raniayasser">
                      <AiFillGithub className="my-12 text-xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/rania-yasser-mohamed-abb596235/">
                      <AiFillLinkedin className="my-12 text-xl" />
                    </a>
                  </div>
                </div>
              </Col>
              <Col md={7}>
                <div className=" mt-[300px] hero-txt max-md:mt-[150px] ">
                  <p
                    className="hero-prag wow flipInX  "
                    data-wow-duration="2s"
                    data-wow-delay="0.1s"
                  >
                    {t("hero-p")}
                    <br />
                    {t("hero-p1")}
                  </p>
                  <h1
                    className="wow flipInX"
                    data-wow-duration="2s"
                    data-wow-delay="0.5s"
                  >
                    {t("hero")}
                    <br />
                    {t("hero2")}
                  </h1>
                  <a href="/about">
                    <button
                      className="mt-[50px] wow flipInX"
                      data-wow-duration="2s"
                      data-wow-delay="1s"
                    >
                      {t("hero-btn")}
                    </button>
                  </a>
                </div>
              </Col>
              <Col md={2}>
                <div className="whatsappCon max-md:mt-[250px]">
                  <a href="https://wa.me/01096237635" className="whatslink">
                    contact@rustictudio.co{" "}
                  </a>
                </div>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide>
            <Row>
              <Col md={2} className=" max-md:hidden">
                <div className="icons mt-[300px]">
                  <p>2023</p>
                  <div className="socialIcon mt-[200px]">
                    <a href="#">
                      <AiOutlineGoogle className="my-12 text-xl" />
                    </a>

                    <a href="#">
                      <AiFillGithub className="my-12 text-xl" />
                    </a>
                    <a href="#">
                      <AiFillLinkedin className="my-12 text-xl" />
                    </a>
                  </div>
                </div>
              </Col>
              <Col md={7}>
                <div className="mt-[300px] hero-txt max-md:mt-[150px] ">
                  <p
                    className="hero-prag wow flipInX"
                    data-wow-duration="2s"
                    data-wow-delay="0.1s"
                  >
                    {t("hero-p")}
                    <br />
                    {t("hero-p1")}
                  </p>
                  <h1
                    className="wow flipInX"
                    data-wow-duration="2s"
                    data-wow-delay="0.5s"
                  >
                    {t("hero")}
                    <br />
                    {t("hero2")}
                  </h1>
                  <a href="/about">
                    <button
                      className="mt-[50px] wow flipInX"
                      data-wow-duration="2s"
                      data-wow-delay="1s"
                    >
                      {t("hero-btn")}
                    </button>
                  </a>
                </div>
              </Col>
              <Col md={2}>
                <div className="whatsappCon ">
                  <a href="https://wa.me/01096237635" className="whatslink">
                    contact@rustictudio.co{" "}
                  </a>
                </div>
              </Col>
            </Row>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* -------------------- (Servises )------------------------ */}

      <Services />

      {/* -------------------- (Projects )------------------------ */}
      <ProjectsSlider />

      {/* -------------------- (Projects )------------------------ */}
      <AboutSec />

      {/* -------------------- (Price Component )------------------------ */}
      {/*  
      <section className="price-Sec">
        <Container>
          <Row>
            <h1>Start Your Dream With An Affordable</h1>
          </Row>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="price-card">
                <Container>
                  <p>{t("price-hero")}</p>
                  <p>
                    <span>$17</span> / {t("price-pro")}
                  </p>
                  <p>{t("price-prag")}</p>
                  <div className="price-icon flex items-center ">
                    <AiOutlineCheckCircle className="mr-2" /> 1 {t("user")}
                  </div>
                  <div className="price-icon flex items-center ">
                    <AiOutlineCheckCircle className="mr-2" /> 1 {t("dashboard")}
                  </div>
                  <div className="price-icon flex items-center ">
                    <AiOutlineCheckCircle className="mr-2" /> 5 {t("project")}
                  </div>
                  <a href="/about">
                    <button
                      className="mt-[50px] wow flipInX"
                      data-wow-duration="2s"
                      data-wow-delay="1s"
                    >
                      {t("price-btn")}
                    </button>
                  </a>
                </Container>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="price-card">
                <Container>
                  <p>{t("price-hero")}</p>
                  <p>
                    <span>$17</span> / {t("price-pro")}
                  </p>
                  <p>{t("price-prag")}</p>
                  <div className="price-icon flex items-center ">
                    <AiOutlineCheckCircle className="mr-2" /> 5 {t("user")}
                  </div>
                  <div className="price-icon flex items-center ">
                    <AiOutlineCheckCircle className="mr-2" /> 1 {t("dashboard")}
                  </div>
                  <div className="price-icon flex items-center ">
                    <AiOutlineCheckCircle className="mr-2" /> 10 {t("project")}
                  </div>
                  <a href="/about">
                    <button
                      className="mt-[50px] wow flipInX"
                      data-wow-duration="2s"
                      data-wow-delay="1s"
                    >
                      {t("price-btn")}
                    </button>
                  </a>
                </Container>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="price-card">
                <Container>
                  <p>{t("price-hero")}</p>
                  <p>
                    <span>$17</span> / {t("price-pro")}
                  </p>
                  <p>{t("price-prag")}</p>
                  <div className="price-icon flex items-center ">
                    <AiOutlineCheckCircle className="mr-2" /> 10 {t("user")}
                  </div>
                  <div className="price-icon flex items-center ">
                    <AiOutlineCheckCircle className="mr-2" /> 5 {t("dashboard")}
                  </div>
                  <div className="price-icon flex items-center ">
                    <AiOutlineCheckCircle className="mr-2" /> 15 {t("project")}
                  </div>
                  <a href="/about">
                    <button
                      className="mt-[50px] wow flipInX"
                      data-wow-duration="2s"
                      data-wow-delay="1s"
                    >
                      {t("price-btn")}
                    </button>
                  </a>
                </Container>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="price-card">
                <Container>
                  <p>{t("price-hero")}</p>
                  <p>
                    <span>$17</span> / {t("price-pro")}
                  </p>
                  <p>{t("price-prag")}</p>
                  <div className="price-icon flex items-center ">
                    <AiOutlineCheckCircle className="mr-2" /> 1 {t("user")}
                  </div>
                  <div className="price-icon flex items-center ">
                    <AiOutlineCheckCircle className="mr-2" /> 1 {t("dashboard")}
                  </div>
                  <div className="price-icon flex items-center ">
                    <AiOutlineCheckCircle className="mr-2" /> 5 {t("project")}
                  </div>
                  <a href="/about">
                    <button
                      className="mt-[50px] wow flipInX"
                      data-wow-duration="2s"
                      data-wow-delay="1s"
                    >
                      {t("price-btn")}
                    </button>
                  </a>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      <PricingTable />

      {/* -------------------- (Reviews Component )------------------------ */}

      <Reviews />
    </>
  );
};

export default Home;
