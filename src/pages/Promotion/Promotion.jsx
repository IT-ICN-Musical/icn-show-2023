import React from "react";

import "./Promotion.css";

import Button from "../../Components/Button";

import BackgroundTicket from "../../assets/BackgroundTicket.png";
import SaujanaLogo from "../../assets/SaujanaLogo.png";
import ticketIcon from "../../assets/icons/ticketIcon.png";
import buyTicket from "../../assets/icons/buyTicket.svg";
import playIcon from "../../assets/icons/playIcon.png";
export default function Promotion() {
  return (
    <>
      <div className="Promotion__Container">
        <img className="Promotion__Background" src={BackgroundTicket} />
        <div
          className="Promotion__Card"
          style={{ maxHeight: "90vh" }}
          data-aos="fade-in"
        >
          <img
            className="Promotion__Logo"
            src={SaujanaLogo}
            data-aos="fade-in"
          />
          <div className="Promotion__Content">
            <p className="Promotion__ICNMusical" data-aos="fade-left">
              ICN 2023 Musical
            </p>
            <h1
              style={{ color: "#BE9D4F" }}
              className="Promotion__Title_Saujana"
              data-aos="fade-left"
            >
              SAUJANA
            </h1>
            <h3 className="Promotion__Heading" data-aos="fade-left">
              Drama Centre Theatre
            </h3>
            <p className="Promotion__Address" data-aos="fade-left">
              National Library Building Level 3, 100 Victoria Street
              <br />
              Singapore 188064
            </p>
            <h3 className="Promotion__Heading" data-aos="fade-left">
              Saturday, 4 February 2023
            </h3>
            <h3
              className="Promotion__Title"
              data-aos="fade-left"
              style={{ lineHeight: "1.3", fontWeight: "500" }}
            >
              MATINEE 14.30 - 16.30 <br />
              NIGHT 19.30 - 21.30
            </h3>
            <div className="Promotion__Card__ButtonGroups">
              <Button
                icon={buyTicket}
                content={"BUY TICKETS"}
                big={true}
                link={"https://show.icnmusical.com/ticket/"}
              />

              <Button
                icon={playIcon}
                content={"WATCH TRAILER"}
                link={"https://youtu.be/oNwRKZbmi2U"}
              />
              <Button
                icon={ticketIcon}
                content={"BACKSTAGE PASS"}
                link={
                  "https://docs.google.com/forms/d/e/1FAIpQLScRoB4ttTWayBl3IjD6TsrPDXA-nhC-KdRMotAqz6qhDaxPXA/viewform?usp=sf_link"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
