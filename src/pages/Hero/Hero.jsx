import React from "react";

import Sky from "../../components/Sky";
import GateBelakang from "../../assets/school/GateBelakang.png";
import GateDepan from "../../assets/school/GateDepan.png";
import GateKiri from "../../assets/school/GateKiri.png";
import GateKanan from "../../assets/school/GateKanan.png";
import SaujanaLogo from "../../assets/SaujanaLogo.png";
import Lantai from "../../assets/school/Lantai.png";
import BackgroundTicket from "../../assets/BackgroundTicket.png";
// import ICNLogo from "../../assets/icn-logo.png";
import Scroll from "../../components/Scroll";
import { Parallax } from "react-scroll-parallax";
import "./Hero.css";
import { useScrollPosition } from "../../utils/hooks/useScrollPosition";
export default function Hero() {
  const pos = useScrollPosition(1);
  const ENDSCROLL = 250;
  const STARTSCROLL = 100;
  return (
    <>
      <div className="Hero">
        <Sky />
        <Parallax
          startScroll={STARTSCROLL}
          endScroll={ENDSCROLL}
          opacity={[1, 0]}
        >
          <img src={GateBelakang} className="Hero__Back__Gate" />
        </Parallax>
        {/* <img src={ICNLogo} className="Hero__ICNLogo" /> */}
        <Parallax
          startScroll={STARTSCROLL}
          endScroll={ENDSCROLL}
          opacity={[1, 0]}
          className="Hero__ICN__Header"
        >
          <div
            className={`${pos > window.innerHeight / 8 ? "Hero__None" : ""}`}
          >
            ICN
          </div>
        </Parallax>
        <Parallax
          scale={[1, 2]}
          opacity={[1, 0]}
          startScroll={STARTSCROLL}
          endScroll={ENDSCROLL}
        >
          <img src={GateDepan} className="Hero__Front__Gate" />
        </Parallax>
        <div className="Hero__Gates">
          <Parallax
            scale={[1, 2]}
            opacity={[1, 0]}
            translateX={["0px", "-100px"]}
            easing="easeInQuad"
            startScroll={STARTSCROLL}
            endScroll={ENDSCROLL}
          >
            <img src={GateKiri} className="Hero__Left__Gate" />
          </Parallax>
          <Parallax
            scale={[1, 2]}
            opacity={[1, 0]}
            translateX={["0px", "100px"]}
            easing="easeInQuad"
            startScroll={STARTSCROLL}
            endScroll={ENDSCROLL}
          >
            <img src={GateKanan} className="Hero__Right__Gate" />
          </Parallax>
        </div>
        <Parallax
          scale={[0, 1]}
          startScroll={STARTSCROLL}
          endScroll={ENDSCROLL}
          className="Hero__SaujanaLogo"
        >
          <img src={SaujanaLogo} />
        </Parallax>

        <Parallax
          opacity={[1, 0]}
          startScroll={STARTSCROLL}
          endScroll={ENDSCROLL}
          className="Hero__Lantai"
        >
          <img src={Lantai} style={{ width: "100vw" }} />
        </Parallax>
        {/* <img
          className={`Hero__Background ${
            pos >= (window.innerHeight * 3) / 4 ? "Hero__Show" : ""
          }`}
          src={BackgroundTicket}
        /> */}
      </div>
    </>
  );
}
