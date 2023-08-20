import React from "react";

import dummy from "../../assets/cast/dummy.png";
import CastCard from "../../components/CastCard";
import "./Cast.css";
export default function Cast() {
  let castArray = [
    {
      name: "nama1",
      roleName: "roleName",
      description: "deskripsi",
      photo: dummy,
    },
    {
      name: "nama2",
      roleName: "roleName",
      description: "deskripsi",
      photo: dummy,
    },
    {
      name: "nama3",
      roleName: "roleName",
      description: "deskripsi",
      photo: dummy,
    },
    {
      name: "nama4",
      roleName: "roleName",
      description: "deskripsi",
      photo: dummy,
    },
  ];
  return (
    <>
      <div className="Cast">
        <h1 className="Cast__Title">CAST</h1>
        <div className="Cast__Container">
          {castArray.length != 0 &&
            castArray.map(({ name, roleName, description, photo }) => (
              <React.Fragment key={name}>
                <CastCard
                  name={name}
                  roleName={roleName}
                  description={description}
                  photo={photo}
                />
                ;
              </React.Fragment>
            ))}
        </div>

        <h4 className="Cast__PressPrompt">Press the actor</h4>
      </div>
    </>
  );
}
