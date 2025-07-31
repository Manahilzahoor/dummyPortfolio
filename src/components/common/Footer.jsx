import React from "react";
import { social } from "../data/dummydata";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
            <i data-aos="zoom-in">{item.icon}</i>
          </>
        ))}
        <p data-aos="zoom-in">All Right Reserved 2018</p>
        <button className="button" onClick={scrollToTop}>
          ↑
        </button>
      </footer>
    </>
  );
};

export default Footer;
