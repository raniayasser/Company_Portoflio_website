import React, { useState } from "react";
import Navbarr from "../Components/Navbarr";
import { Nav, Container, Col, Tab, Row } from "react-bootstrap";
import axios from "axios";
import { t } from "i18next";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  axios.get("ProjectsData.json").then((res) => {
    setProjects(res.data.projects);
  });

  return (
    <>
      <Navbarr id="navbar-light" />

      {/* Projects filter */}
      <section id="projects" className="Projects">
        <Tab.Container id="projects-tabs" defaultActiveKey="All">
          <Container>
            <p>
              <a href="/" className="homelink">
                {t("home")}
              </a>{" "}
              / <a href="/projects">{t("projects")}</a>
            </p>

            <h1>{t("ourProjects")}</h1>

            <Nav
              variant="pills"
              className="nav-pills flex items-center justify-end"
              id="pills-tab"
            >
              <Nav.Item>
                <Nav.Link eventKey="All">{t("all")}</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="residenital">{t("Residenital")}</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="commercial">{t("commercial")}</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="suitantable">{t("suitantable")}</Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
          <Tab.Content>
            <Tab.Pane eventKey="All">
              <Row>
                {projects.map((project, index) => {
                  return (
                    <Col xl={3} lg={4} sm={12} md={6}>
                      <div className="ProjectCard">
                        <div className="projectSlide">
                          <img src={project.photo} alt="..." />
                          <div className="slide-text">
                            <p>{t(project.pragraph)}</p>
                            <a href="/singleProject">
                              <h1>{t(project.title)}</h1>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="residenital">
              <Row>
                {projects.map((project) => {
                  return project.id === "residenital" ? (
                    <Col xl={3} lg={4} sm={12} md={6}>
                      <div className="ProjectCard">
                        <div className="projectSlide">
                          <img src={project.photo} alt="..." />
                          <div className="slide-text">
                            <p>{t(project.pragraph)}</p>
                            <a href="/singleProject">
                              <h1>{t(project.title)}</h1>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ) : (
                    console.log("notfounded")
                  );
                })}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="commercial">
              <Row>
                {projects.map((project) => {
                  return project.id === "commercial" ? (
                    <Col xl={3} lg={4} sm={12} md={6}>
                      <div className="ProjectCard">
                        <div className="projectSlide">
                          <img src={project.photo} alt="..." />
                          <div className="slide-text">
                            <p>{t(project.pragraph)}</p>
                            <a href="/singleProject">
                              <h1>{t(project.title)}</h1>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ) : (
                    console.log("notfounded")
                  );
                })}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="suitantable">
              <Row>
                {projects.map((project) => {
                  return project.id === "suitantable" ? (
                    <Col xl={3} lg={4} sm={12} md={6}>
                      <div className="ProjectCard">
                        <div className="projectSlide">
                          <img src={project.photo} alt="..." />
                          <div className="slide-text">
                            <p>{t(project.pragraph)}</p>
                            <a href="/singleProject">
                              <h1>{t(project.title)}</h1>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ) : (
                    console.log("notfounded")
                  );
                })}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </section>
    </>
  );
};

export default Projects;
