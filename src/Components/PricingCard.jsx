import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { AiOutlineCheckCircle } from "react-icons/ai";
const PricingCard = (props) => {
  const [t] = useTranslation();

  return (
    <>
      <div
        className="price-card wow fadeInUp"
        data-wow-duration="2s"
        data-wow-delay="0.2s"
      >
        <p className="p-title">{props.title}</p>
        <p className="year-month">
          <span className="priceNum">${props.price}</span> / {props.par}
        </p>
        <p className="prag">{t("price-prag")}</p>
        <div className="price-icon flex items-center ">
          <AiOutlineCheckCircle className="mr-2 p-icon" /> {props.userNum}{" "}
          {t("user")}
        </div>
        <div className="price-icon flex items-center ">
          <AiOutlineCheckCircle className="mr-2 p-icon" /> {props.dashboardNum}{" "}
          {t("dashboard")}
        </div>
        <div className="price-icon flex items-center ">
          <AiOutlineCheckCircle className="mr-2 p-icon" /> {props.projectsNum}{" "}
          {t("project")}
        </div>
        <a href="/about">
          <button data-wow-duration="2s" data-wow-delay="1s">
            {t("price-btn")}
          </button>
        </a>
      </div>
    </>
  );
};

export default PricingCard;
