import React from "react";

const Header = () => {
  return (
    <div className="text-center bg-success py-5 text-white">
      <h1
        style={{
          fontFamily: "Bangers",
          letterSpacing: "0.1em",
        }}
        className="mb-4 "
      >
        Cricket Matches
      </h1>
      <p className="fs-5">Get all the live updates of upcoming matches</p>
    </div>
  );
};

export default Header;
