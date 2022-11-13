import React from "react";
import "../styles/Home.scss";

const Home = () => {
  return (
    <>
      <div className="main--container">
      <div className="image--box">
      <img src="/assets/nasa-rocket.jpeg" alt="rocket" className="bg--image"/>
      </div>
      <div className="title">
        <h1>SPACE TOURISM WITH CAPSULE CORP.</h1>
        <button className="button">Discover More</button>
      </div>
      </div>
    </>
  );
};

export default Home;
