import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Switch } from "antd";
import { AiOutlineCheckCircle } from "react-icons/ai";
import PricingCard from "./PricingCard";

const PricingTable = () => {
  const [t, i18n] = useTranslation();
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <>
      <section className="pricingTaple py-[100px]">
        <Row>
          <h1 className="pricing-head ">{t("pricingTableHead")}</h1>
          <p className="toggle-price">
            {" "}
            <span className="month">{t("Billed-Monthly")}</span>
            <Switch onClick={toggler} className="toggler-btn" />
            <span>{t("Billed-Annually")}</span>
          </p>
        </Row>
        {toggle ? (
          <>
            <section className="price-Sec">
              <Container>
                <Row>
                  <Col lg={3} md={6} sm={12}>
                    <PricingCard
                      title={t("price-hero3")}
                      par={t("price-year")}
                      price={99}
                      userNum={20}
                      dashboardNum={t("unlimited")}
                      projectsNum={50}
                    />
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <PricingCard
                      title={t("price-hero2")}
                      par={t("price-year")}
                      price={59}
                      userNum={3}
                      dashboardNum={t("unlimited")}
                      projectsNum={50}
                    />
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <PricingCard
                      title={t("price-hero1")}
                      par={t("price-year")}
                      price={24}
                      userNum={20}
                      dashboardNum={t("unlimited")}
                      projectsNum={50}
                    />
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <PricingCard
                      title={t("price-hero3")}
                      par={t("price-year")}
                      price={99}
                      userNum={3}
                      dashboardNum={t("unlimited")}
                      projectsNum={50}
                    />
                  </Col>
                </Row>
              </Container>
            </section>
          </>
        ) : (
          <>
            <section className="price-Sec">
              <Container>
                <Row>
                  <Col lg={3} md={6} sm={12}>
                    <PricingCard
                      par={t("price-month")}
                      title={t("price-hero1")}
                      price={17}
                      userNum={1}
                      dashboardNum={1}
                      projectsNum={5}
                    />
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <PricingCard
                      title={t("price-hero2")}
                      par={t("price-month")}
                      price={24}
                      userNum={5}
                      dashboardNum={1}
                      projectsNum={10}
                    />
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <PricingCard
                      title={t("price-hero3")}
                      par={t("price-month")}
                      price={29}
                      userNum={10}
                      dashboardNum={5}
                      projectsNum={15}
                    />
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                    <PricingCard
                      title={t("price-hero1")}
                      par={t("price-month")}
                      price={17}
                      userNum={1}
                      dashboardNum={1}
                      projectsNum={5}
                    />
                  </Col>
                </Row>
              </Container>
            </section>
          </>
        )}
      </section>
    </>
  );
};

export default PricingTable;
