import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import heroImg from "../../assests/images/heroImg.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section id="home">
        <Container>
            <Row>
                <Col lg="6" md="6">
                    <div className="hero__content">
                        <h2 className="mb-4 hero__title">
                            Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
                        </h2>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur <br /> 
                            adipisicing elit. Modi voluptates sequi <br />
                            maiores eum illum quaerat magnam ad. <br />
                            Optio, libero repudiandae.
                        </p>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search" />
                        <button className="btn">Search</button>
                    </div>
                </Col>

                <Col lg="6" md="6">
                    <img src={heroImg} alt="hero-img" className="w-100 hero__img" />
                </Col>
            </Row>
        </Container>
    </section>
  )
};

export default HeroSection;