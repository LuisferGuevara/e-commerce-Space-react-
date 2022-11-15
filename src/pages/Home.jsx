import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "setClass" });
  }, [dispatch]);
  const [surprise, setSurprise] = useState(true);

  return (
    <>
      {surprise ? (
        <div className="main--container">
          <div className="image--box">
            <img src="/assets/nasa-rocket.jpeg" alt="rocket" className="bg--image" />
          </div>
          <div className="title">
            <h1>SPACE TOURISM WITH CAPSULE CORP.</h1>
            <button onClick={() => setSurprise(false)} className="button">
              Discover More
            </button>
          </div>
        </div>
      ) : (
        <div className="horse--luis">
          <img src="/assets/horsee.png" alt="JOSE LUIS" />
        </div>
      )}
    </>
  );
};

export default Home;
