import React from "react";
import { SPACE } from "../utils/data/space";
import "../styles/Planets.scss";
import Render from "../components/Render";

const { planets } = SPACE;
const Planets = () => {
  return (
    <>
      <h2 className="h2">These are the Planets we offer to travel!</h2>
      <div className="planets--billboard">
        <Render planets={planets} />
      </div>
    </>
  );
};

export default Planets;
