import React from "react";
import { Parallax } from "react-scroll-parallax";
import "./Sky.css";
export default function Sky() {
  const ENDSCROLL = 250;
  const STARTSCROLL = 100;
  return (
    <Parallax
      startScroll={STARTSCROLL - 50}
      endScroll={STARTSCROLL}
      opacity={[1, 0]}
    >
      <div id="sky"></div>
    </Parallax>
  );
}
