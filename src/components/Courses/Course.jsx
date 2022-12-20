import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./Course.css";
import CourseCard from "./CourseCard";

const Courses = () => {
    const coursesData = [
        {
            id: "01",
            title: "Web Design BootCamp-2022 for Beginners",
            lesson: 15,
            students: 3.9,
            rating: 4.7,
            imgUrl: courseImg1,
        },

        {
            id: "02",
            title: "Professional Graphics Design",
            lesson: 7,
            students: 4.2,
            rating: 4.9,
            imgUrl: courseImg2,
        },

        {
            id: "03",
            title: "UI/UX BootCamp for Beginners in 2022",
            lesson: 9,
            students: 5.9,
            rating: 4.6,
            imgUrl: courseImg3,
        },
    ];

    return (
        <section id="courses">
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                        <div className="course__top d-flex justify-content-between align-items-center">
                            <div className="course__top__left w-100">
                                <h2>Our Popular Courses</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae <br />
                                    consequatur libero quod voluptatibus ullam quia quas, vitae <br />
                                    voluptatem recusandae reprehenderit!
                                </p>
                                <button className="btn">See All</button>
                            </div>
                        </div>
                    </Col>
                    {coursesData.map((item) => (
                        <Col lg="4" md="6" sm="6">
                            <CourseCard key={item.id} item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Courses;