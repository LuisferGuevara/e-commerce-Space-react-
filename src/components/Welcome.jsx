import React, { useState } from "react";
import Login from "../pages/Login";
import "../styles/Welcome.scss";

const Welcome = () => {
  const [mainDisplay, setMainDisplay] = useState(true);
  return (
    <>
      <div className="welcome">
        {mainDisplay ? (
          <div>
            <div className="bg--welcome">
              <img
                src="https://www.vfxvoice.com/wp-content/uploads/2018/11/PIX-6-NFL_104_402_010_comp_v006.0003.jpg
 "
                alt="sattel"
              />
            </div>
            <div className="welcome--text">
              <p>Welcome to CAPSULE CORP. V I P Space Travel</p>
              <p>Our services are exclusive for Invite Only & Identified User. </p>
              <button onClick={() => setMainDisplay(false)} className="glow-on-hover">
                Identify
              </button>
            </div>
          </div>
        ) : (
          <>
            <Login />
          </>
        )}
      </div>
    </>
  );
};

export default Welcome;
