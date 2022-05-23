import React from "react";

const Banner = () => {
  const myStyle = {
    backgroundImage: "url('https://i.ibb.co/175xJ5n/Banner.jpg')",
    height: "95vh",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={myStyle}>
      <div className="pt-14 pl-10">
        <h2 className="font-bold uppercase text-orange-500 ">
          {" "}
          <span className="text-7xl ">Build</span> <br /> Your Own Pc
        </h2>
        <h3 className="uppercase text-sm  font-bold ">
          find the best parts for your pc and workstation
        </h3>
        <button className="btn btn-accent">Shop now </button>
      </div>
    </div>
  );
};

export default Banner;
