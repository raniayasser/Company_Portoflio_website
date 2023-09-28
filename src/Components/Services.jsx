import React from "react";
import { Col, Row } from "react-bootstrap";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineReload } from "react-icons/ai";
// Translate AR && EN
import { useTranslation } from "react-i18next";
const Services = () => {
  const [t, i18n] = useTranslation();

  return (
    <>
      <section className="services my-[150px] ">
        <Row>
          <Col md={6} sm={12} className="d-flex">
            <div className="pattern">
              <img
                src="./imgs/pattern-1.png"
                alt="..."
                className=" max-lg:hidden "
              />
            </div>

            <div className="service_txt">
              <p className="prag">{t("servises")}</p>
              <h1>{t("service_header")}</h1>
              <div className="service_card d-flex justify-between items-center">
                <div className="icon">
                  <AiOutlineHome className=" text-[50px]" />
                </div>
                <div className="card_txt">
                  <a href="/projects">{t("servCard_head1")}</a>
                  <p className=" text-gray-500 mt-[15px]">
                    {t("service_prag")}
                  </p>
                </div>
              </div>

              <div className="service_card  d-flex justify-between items-center">
                <div className="icon">
                  <AiOutlineShoppingCart className="text-[50px] " />
                </div>
                <div className="card_txt">
                  <a href="/projects">{t("servCard_head2")}</a>
                  <p className=" text-gray-500 mt-[15px]">
                    {t("service_prag")}
                  </p>
                </div>
              </div>

              <div className="service_card d-flex justify-between items-center">
                <div className="icon">
                  <AiOutlineReload className="text-[50px]" />
                </div>
                <div className="card_txt">
                  <a href="/projects">{t("servCard_head3")}</a>
                  <p className=" text-gray-500 mt-[15px]">
                    {t("service_prag")}
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <img
              src="./imgs/1 (2).jpg"
              alt="..."
              className=" object-cover ml-[100px] max-lg:ml-[0px] service_img "
            />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Services;
