import React from "react";

import "./CastCard.css";
export default function CastCard({ name, roleName, photo }) {
  return (
    <>
      <div className="CastCard">
        <img className="CastCard__Photo" src={photo} alt="" />
        <div className="CastCard__BriefDescription">
          <h3>{name}</h3>
          <h4>{roleName}</h4>
        </div>
      </div>
    </>
  );
}
