// src/components/Header.jsx (최종 수정 버전)
import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-scroll';
import topLogo from '../assets/top.png';

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* 왼쪽: 로고만 남깁니다 */}
        <div className="header-left" onClick={scrollToTop}>
          <img src={topLogo} alt="TOP" className="header-logo" />
        </div>
        
        {/* 가운데: 제목을 독립적으로 배치합니다 */}
        <h1 className="header-title" onClick={scrollToTop}>픽스유 파티룸</h1>

        {/* 오른쪽: 내비게이션 메뉴 */}
        <nav className="navigation">
          <Link to="main" spy={true} smooth={true} activeClass="active">Main</Link>
          <Link to="about" spy={true} smooth={true} activeClass="active">공간소개</Link>
          <Link to="reservation" spy={true} smooth={true} activeClass="active">예약하기</Link>
          <Link to="reviews" spy={true} smooth={true} activeClass="active">후기/리뷰</Link>
          <Link to="rules" spy={true} smooth={true} activeClass="active">이용안내/규칙</Link>
        </nav>
      </div>
      <div className="header-divider"></div>
    </header>
  );
};

export default Header;
