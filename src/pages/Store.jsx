import React from "react";
import "../styles/Store.scss";

const Store = () => {
  return (
    <div className="store">
      <h1 className="add">
        our online store is under maintenance, we apologize for the inconvenience.
      </h1>
      <div className="img--box">
        <img src="/assets/loop.png" alt="lost" />
      </div>
    </div>
  );
};

export default Store;
