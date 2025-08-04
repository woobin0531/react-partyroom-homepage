import React from "react";
import "../styles/Header.css";
import { Link } from "react-scroll";
import topLogo from "../assets/top.png";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left" onClick={scrollToTop}>
          <img src={topLogo} alt="TOP" className="header-logo" />
        </div>
        <h1 className="header-title" onClick={scrollToTop}>
          픽스유 파티룸
        </h1>
        <nav className="navigation">
          <Link to="main" spy={true} smooth={true} activeClass="active">
            Main
          </Link>
          <Link to="about" spy={true} smooth={true} activeClass="active">
            공간소개
          </Link>
          <Link to="reservation" spy={true} smooth={true} activeClass="active">
            예약하기
          </Link>
          <Link to="reviews" spy={true} smooth={true} activeClass="active">
            후기/리뷰
          </Link>
          <Link to="rules" spy={true} smooth={true} activeClass="active">
            이용안내/규칙
          </Link>
        </nav>
      </div>
      <div className="header-divider"></div>
    </header>
  );
};

export default Header;
