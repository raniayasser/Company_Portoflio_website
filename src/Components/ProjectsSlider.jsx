import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
// Import Swiper
import { Pagination, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const ProjectsSlider = () => {
  const [t, i18n] = useTranslation();
  const [projects, setproject] = useState([]);
  useEffect(() => {
    axios.get("ProjectsData.json").then((res) => {
      setproject(res.data.projects);
    });
  }, []);
  return (
    <section className="projectSLider ">
      <Container>
        <Row>
          <div className="headpro">
            <div>
              <h1>{t("ProComponentHeader")}</h1>
            </div>
            <div>
              <a href="/projects">{t("ProComponentLink")}</a>
            </div>
          </div>
        </Row>
      </Container>
      <Row>
        <Swiper
          modules={[FreeMode, Pagination]}
          // slidesPerView={4}
          spaceBetween={8}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          breakpoints={{
            1200: { slidesPerView: 4 },
            992: { slidesPerView: 3 },
            640: { slidesPerView: 2 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide>
              <div className="projectSlide">
                <img src={project.photo} alt="..." />
                <div className="slide-text">
                  <p>{t(project.pragraph)}</p>
                  <h1>{t(project.title)}</h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Row>
    </section>
  );
};

export default ProjectsSlider;
