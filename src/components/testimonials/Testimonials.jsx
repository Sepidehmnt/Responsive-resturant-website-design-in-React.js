import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../testimonials/testimonial.css";

import testimonialImg from "../../assets/images/review1.png";

import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="slider__wrapper d-flex align-items-center gap-5">
              <div className="slider__content w-50">
                <h2 className="mb-4">What our customers are saying</h2>
                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <p className="review__content">
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                        rem magni quasi, blanditiis ipsum, corporis mollitia sint
                        laborum, quos cumque aliquid enim rerum. Reprehenderit
                        consequuntur ad ipsam delectus beatae expedita?"
                      </p>

                      <h6>Jhon Doe</h6>
                      <p>Web Developer</p>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <p className="review__content">
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                        rem magni quasi, blanditiis ipsum, corporis mollitia sint
                        laborum, quos cumque aliquid enim rerum. Reprehenderit
                        consequuntur ad ipsam delectus beatae expedita?"
                      </p>

                      <h6>Jhon Doe</h6>
                      <p>Web Developer</p>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="slider__img w-50">
                <img src={testimonialImg} alt="" className="w-100" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;