import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./ChooseUs.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
    const [showVideo, setShowVideo] = useState(false);
    return (
        <section id="pages">
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="choose__content">
                            <h2>Why Choose Us</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Incidunt mollitia nostrum harum eos praesentium odit a sed quod
                                aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis
                                minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolores cupiditate facilis provident quidem accusamus impedit
                                tenetur laboriosam debitis nisi eius!
                            </p>
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className="choose__img">
                            {showVideo ? (
                                <ReactPlayer
                                    url="https://www.youtube.com/"
                                    controls
                                    width="100%"
                                    height="350px"
                                />
                            ) : (
                                <img src={chooseImg} height="350px" alt="" className="w-100" />
                            )}

                            {!showVideo && (
                                <span className="play__icon">
                                    <i
                                        class="ri-play-circle-line"
                                        onClick={() => setShowVideo(!showVideo)}
                                    ></i>
                                </span>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ChooseUs;