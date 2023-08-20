import React from "react";

import Sinopsis1 from "../../assets/illus/Sinops1_Subj.png";
import Sinopsis2 from "../../assets/illus/Sinops2_Subj.png";
import Sinopsis3 from "../../assets/illus/Sinops3_Subj.png";

import backgroundSynopsis from "../../assets/backgroundSynopsis.png";
// import Divider from "../../assets/icons/divider2.png";
import Clouds from "../../components/Clouds";
import "./Synopsis.css";
export default function Synopsis() {
  return (
    <div className="Synopsis__Container">
      {/* Sinopsis1 Start */}
      <Clouds />
      <div className="Synopsis__Sinopsis1">
        <img
          src={backgroundSynopsis}
          alt=""
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            opacity: "0.3",
            zIndex: "-1",
          }}
        />
        <div className="Synopsis__Sinopsis1__Texts">
          <div
            className="Synopsis__Sinopsis1__Texts__Title"
            data-aos="fade-right"
          >
            SAUJANA
          </div>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong"
          />
          <div
            className="Synopsis__Sinopsis1__Texts__Body"
            data-aos="fade-right"
          >
            Lina has always been the perfect daughter. She has excellent grades
            and the widest smile. Being the younger sibling, she has assumed the
            role of mediator between her in-your-face brother, Gilang, and their
            assertive parents, Rachel and Alvin. Though conscious of it, Lina
            does not mind; she has accepted that this is her role in the grander
            scheme of things. Unfortunately, issues started to brew in her
            personal life, casting a cloud over her ability to guide her family
            through their troubles and taking a toll on her internal well-being.
          </div>
        </div>
        <img
          data-aos="fade-left"
          src={Sinopsis1}
          alt="Student"
          className="Synopsis__Sinopsis1__Image"
        />
      </div>
      {/* Sinopsis2 Start */}
      <div className="Synopsis__Sinopsis2">
        <img
          src={backgroundSynopsis}
          alt=""
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            opacity: "0.3",
            zIndex: "-1",
          }}
        />
        <img
          src={Sinopsis2}
          alt="Student"
          className="Synopsis__Sinopsis2__Image"
          data-aos="fade-right"
        />
        <div className="Synopsis__Sinopsis2__Texts" data-aos="fade-left">
          Our show focuses on how Indonesians balance the relentless pace of
          modern life, while still clinging on to traditional Indonesian
          perceptions of an ideal family and way of life.
        </div>
      </div>
      {/* Sinopsis3 Start */}
      <div className="Synopsis__Sinopsis3">
        <img
          src={backgroundSynopsis}
          alt=""
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            opacity: "0.3",
            zIndex: "-1",
          }}
        />
        <div className="Synopsis__Sinopsis3__Texts" data-aos="fade-right">
          We are proud to present ICN 2023: Saujana, a musical about a girl who
          learns to speak up, and her family, who learns to listen.
        </div>
        <img
          data-aos="fade-left"
          src={Sinopsis3}
          alt="Student"
          className="Synopsis__Sinopsis1__Image"
        />
      </div>
    </div>
  );
}
