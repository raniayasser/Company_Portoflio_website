import React from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Reviews = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <section className="review-sec">
        <Container>
          <Row>
            <div className="prev-next-Icons ">
              <h1 className="mb-[30px]">{t("review-hero")}</h1>
              <div className="flex ">
                <AiOutlineLeft className=" text-[24px] button-prev hover:text-black iconReview" />
                <AiOutlineRight className=" text-[24px] button-next hover:text-black iconReview" />
              </div>
            </div>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              loop
              slidesPerView={1}
              breakpoints={{ 768: { slidesPerView: 2 } }}
              navigation={{
                nextEl: ".button-next",
                prevEl: ".button-prev",
              }}
            >
              <SwiperSlide>
                <div className="review-card">
                  <div className="comment">
                    <FaQuoteRight className="commentIcon" />
                  </div>

                  <p>
                    <span className="font-bold">{t("BobsHanley")}</span>
                    {t("Spotify")}
                  </p>
                  <p>{t("review-p")}</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="review-card">
                  <div className="comment">
                    <FaQuoteRight className="commentIcon" />
                  </div>

                  <p>
                    <span className="font-bold">{t("RyanBetthalyn")}</span>
                    {t("Chobham-Manor")}
                  </p>
                  <p>{t("review-p")}</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="review-card">
                  <div className="comment">
                    <FaQuoteRight className="commentIcon" />
                  </div>

                  <p>
                    <span className="font-bold">{t("BobsHanley")}</span>
                    {t("Spotify")}
                  </p>
                  <p>{t("review-p")}</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="review-card">
                  <div className="comment">
                    <FaQuoteRight className="commentIcon" />
                  </div>

                  <p>
                    <span className="font-bold">{t("RyanBetthalyn")}</span>
                    {t("Chobham-Manor")}
                  </p>
                  <p>{t("review-p")}</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </Row >
          <Row >
            <Swiper
              loop
              spaceBetween={5}
              slidesPerView={2}
              breakpoints={{
                1200: { slidesPerView: 5 },
                992: { slidesPerView: 4 },
                768: { slidesPerView: 3 },
              }}
            >
              <SwiperSlide>
                <img src="./imgs/1.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./imgs/2.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./imgs/3.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./imgs/4.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./imgs/5.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Reviews;
