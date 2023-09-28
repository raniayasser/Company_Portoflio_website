import React, { useRef } from "react";
import Navbarr from "../Components/Navbarr";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [t] = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xcydzhl",
        "template_so205ds",
        form.current,
        "QiASNvHZJqpnzsZmS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("sending..!");
    e.target.reset();
  };
  return (
    <>
      <Navbarr id="navbar-light" />

      {/* Google Map */}
      <div className="mapouter  " id="Map">
        <div className="gmap_canvas">
          <iframe
            className="gmap_iframe h-[90vh]"
            width="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=1500&amp;height=460&amp;hl=en&amp;q=West Melbourne VIC 3003, Australia&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>

      {/* contact form  */}
      <section className="contactUs">
        <Container>
          <Row>
            <Col md={5} sm={12}>
              <div className="Contact-info">
                <div className="contact-txt ">
                  <h1>{t("contact")}</h1>
                  <h3>{t("contact-address1")}</h3>
                  <p className="prag">{t("contact-address2")}</p>
                  <p>
                    {" "}
                    <a href="https://wa.me/01096237635" className="whatslink">
                      (+02) 0109 623 7635
                    </a>
                  </p>
                  <p>
                    <a href="mailto:raniayasser227@gmail.com">
                      raniayasser227@gmail.com
                    </a>
                  </p>
                </div>
                <div>
                  <button className="map-btn">
                    <a href="#Map">
                      {t("Map")}
                      {" >"}{" "}
                    </a>
                  </button>
                </div>
              </div>
            </Col>
            <Col md={7} sm={12}>
              <div>
                <p className="form-head">{t("form-head")}</p>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="name-email">
                    <input
                      type="text"
                      name="name"
                      placeholder={t("name")}
                      required
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder={t("email")}
                      required
                    />
                  </div>

                  <textarea
                    name="message"
                    placeholder={t("message")}
                    required
                  />
                  <button type="submit">{t("Send-Message")}</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
