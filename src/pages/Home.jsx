import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "../styles/Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(()=>{dispatch({type:"setClass"},)},[dispatch])
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
