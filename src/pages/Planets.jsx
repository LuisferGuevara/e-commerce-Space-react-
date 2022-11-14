import React, { useEffect } from "react";
import "../styles/Planets.scss";
import Render from "../components/Render";
import { useDispatch, useSelector } from "react-redux";
import { getPlanets } from "../redux/Planets/planets.action";

const Planets = () => {
  const dispatch = useDispatch();
  const { filter, planets } = useSelector((state) => state.planetsFilter);


  useEffect(() => {dispatch(getPlanets());}, [dispatch]);
  useEffect(() => {dispatch({type:"setFilter", payload:planets});}, [dispatch, planets]);

  const showAll = async () => {
    dispatch({type:"setFilter", payload:planets})
  };

  const showPlanets = async () => {
    const planetsFilter = planets.filter((planet) => {
      return !planet.moon;
    });
    dispatch({ type: "setFilter", payload:planetsFilter });
  };
  const showMoons = async () => {
    console.log(planets);
    const moonsFilter = planets.filter((planet) => {
      return planet.moon;
    });
    console.log(moonsFilter);
    dispatch({ type: "setFilter", payload:moonsFilter });
  };


  return (
    <div className="planets--section">
      <div className="planets--box-1">
        <h2 className="h2">These are the Planets we offer to travel!</h2>
        <div className="filter--buttons-planets">
          
        <button onClick={showAll}>ALL</button>
        <button onClick={showPlanets}>PLANETS</button>
        <button onClick={showMoons}>MOONS</button>
        </div>
      </div>
      <div className="planets--billboard">
        <Render planets={filter} />
      </div>
    </div>
  );
};

export default Planets;
