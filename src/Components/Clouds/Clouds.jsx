import React from "react";
import { Parallax } from "react-scroll-parallax";

import cloud1 from "../../assets/clouds/cloud1.png";
import cloud2 from "../../assets/clouds/cloud2.png";
import cloud3 from "../../assets/clouds/cloud3.png";
import cloud4 from "../../assets/clouds/cloud4.png";
import cloud5 from "../../assets/clouds/cloud5.png";
import cloud6 from "../../assets/clouds/cloud6.png";

import "./Clouds.css";
export default function Clouds() {
  return (
    <Parallax speed={10}>
      <div className="Clouds">
        <img src={cloud1} className="Clouds__Cloud1 Clouds__Cloud" />
        <img src={cloud2} className="Clouds__Cloud2 Clouds__Cloud" />
        <img src={cloud3} className="Clouds__Cloud3 Clouds__Cloud" />
        <img src={cloud4} className="Clouds__Cloud4 Clouds__Cloud" />
        <img src={cloud5} className="Clouds__Cloud5 Clouds__Cloud" />
        <img src={cloud6} className="Clouds__Cloud6 Clouds__Cloud" />
      </div>
    </Parallax>
  );
}
