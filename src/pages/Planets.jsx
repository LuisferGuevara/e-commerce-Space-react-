import React from "react";
import { SPACE } from "../utils/data/space";
import "../styles/Planets.scss";
import Render from "../components/Render";
import { useDispatch, useSelector } from "react-redux";

const { planets } = SPACE;
const Planets = () => {

  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.planetsFilter);

  const moonsFilter = planets.filter((planet) => {
    return planet.moon;
  });
  const planetsFilter = planets.filter((planet) => {
    return !planet.moon;
  });

  const showAll = async () => {
    dispatch({ type: "all" });
  };
  const showPlanets = async () => {
    dispatch({ type: "planetsFil" });
  };
  const showMoons = async () => {
    dispatch({ type: "moons" });
  };

  return (
    <div className="planets--section">
      <div>
        <h2 className="h2">These are the Planets we offer to travel!</h2>
        <button onClick={showAll}>ALL</button>
        <button onClick={showPlanets}>PLANETS</button>
        <button onClick={showMoons}>MOONS</button>
      </div>
      {/* REFACTORIZAR !!!!!! */}
      <div className="planets--billboard"> 
        <Render planets={filter === "moonsFilter" && moonsFilter} />
        <Render planets={filter === "planetsFilter" && planetsFilter} />
        <Render planets={filter === "planets" && planets} />
      </div>
    </div>
  );
};

export default Planets;
