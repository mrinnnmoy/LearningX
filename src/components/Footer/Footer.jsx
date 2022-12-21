import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./Footer.css";

const Footer = () => {
    const footerQuickLinks = [
        {
            index: 1,
            display: "Home",
            url: "#home",
        },
        {
            index: 2,
            display: "About",
            url: "#about",
        },
        {
            index: 3,
            display: "Courses",
            url: "#courses",
        },
        {
            index: 4,
            display: "Blog",
            url: "#blog",
        },
    ];

    const footerInfoLinks = [
        {
            index: 1,
            display: "Privacy Policy",
            url: "#privacy",
        },
        {
            index: 2,
            display: "Membership",
            url: "#membership",
        },
        {
            index: 3,
            display: "Purchases Guide",
            url: "#purchase",
        },
        {
            index: 4,
            display: "Terms of Service",
            url: "#terms",
        },
    ];

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="3" md="6" className="mb-4">
                        <h2 className=" d-flex align-items-center gap-1">
                            <i class="ri-pantone-line"></i> LearningX
                        </h2>

                        <div className="follows">
                            <p className="mb-0">Follow us on social media</p>
                            <span>
                                {" "}
                                <a href="facebook.com">
                                    <i class="ri-facebook-line"></i>
                                </a>
                            </span>

                            <span>
                                {" "}
                                <a href="instagram.com">
                                    <i class="ri-instagram-line"></i>
                                </a>
                            </span>

                            <span>
                                {" "}
                                <a href="www.linkedin.com">
                                    <i class="ri-linkedin-line"></i>
                                </a>
                            </span>

                            <span>
                                {" "}
                                <a href="www.twitter.com">
                                    <i class="ri-twitter-line"></i>
                                </a>
                            </span>
                        </div>
                    </Col>

                    <Col lg="3" md="6" className="mb-4">
                        <h6 className="fw-bold">Explore</h6>
                        <ListGroup className="link__list">
                            {footerQuickLinks.map((item, index) => (
                                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                                    {" "}
                                    <a href={item.url}>{item.display}</a>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col lg="3" md="6" className="mb-4">
                        <h6 className="fw-bold">Information</h6>
                        <ListGroup className="link__list">
                            {footerInfoLinks.map((item, index) => (
                                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                                    {" "}
                                    <a href={item.url}>{item.display}</a>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col lg="3" md="6">
                        <h6 className="fw-bold">Get in Touch</h6>

                        <p>Address: 46 Lenin Sarani,</p>
                        <p> Kolkata, West Bengal.</p>
                        <p>Email: learningx@gmail.com</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;