import React, { useRef } from 'react';
import { Container } from 'reactstrap';
import "./Header.css";

const Header = () => {

    const navLinks = [
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
            display: "Pages",
            url: "#pages",
        },
        {
            index: 5,
            display: "Blog",
            url: "#blog",
        },
    ];

    const menuRef = useRef();

    const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="sticky-top w-100 pt-4">
        <Container>
            <div className="navigation d-flex align-items-center justify-content-between">
                <div className="logo">
                    <h2 className="d-flex align-itmes-center gap-1">
                        <i className="ri-pantone-line"></i>
                        LearningX
                    </h2>
                </div>

                <div className="nav d-flex align-itmes-center gap-5">
                    <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
                        <ul className="nav__list">
                            {navLinks.map((item, index) => (
                                <li key={index} className="nav__item">
                                    <a href={item.url}>{item.display}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mobile__menu">
                    <span>
                        <i className="ri-menu-line" onClick={menuToggle}></i>
                    </span>
                </div>
            </div>
        </Container>
    </header>
  )
};

export default Header;