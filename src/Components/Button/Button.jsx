import React from "react";

import "./Button.css";
export default function Button({ content, icon, big, link }) {
  return (
    <>
      <a
        target="_blank"
        className={`Button ${big ? "big" : ""}`}
        data-aos="fade-in"
        href={link}
      >
        <h4 className="Button__Text">{content}</h4>
        <img className="Button__Icon" src={icon} />
      </a>
    </>
  );
}
