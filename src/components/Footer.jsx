import React from "react";
import "../styles/Footer.css";

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-content">
      <span>
        연락문의: <b>010-5643-4419</b>
      </span>
      <span>
        <a
          className="footer-link"
          href="https://www.instagram.com/fixyou_partyroom"
          target="_blank"
          rel="noopener noreferrer"
        >
          인스타그램 @fixyou_partyroom
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
