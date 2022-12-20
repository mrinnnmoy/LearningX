import React, { useRef } from 'react';
import { Container } from 'reactstrap';
import "./Header.css";

const Header = () => {
    const navLinks = [
        {
            display: "Home",
            url: "#home",
        },
        {
            display: "About",
            url: "#about",
        },
        {
            display: "Courses",
            url: "#courses",
        },
        {
            display: "Pages",
            url: "#pages",
        },
        {
            display: "Blog",
            url: "#blog",
        },
    ];

    const menuRef = useRef();

    const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
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