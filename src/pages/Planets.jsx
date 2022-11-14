import React, { useEffect } from "react";
import "../styles/Planets.scss";
import Render from "../components/Render";
import { useDispatch, useSelector } from "react-redux";
import { getPlanets } from "../redux/Planets/planets.action";



const Planets = () => {

  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.planetsFilter);
  console.log(filter);

  useEffect(()=>{
    dispatch(getPlanets())},[dispatch])

  
  // const showAll = async () => {
  //   dispatch({type:"setFilter", payload:planets})
  // };

  // const showPlanets = async () => {
  //   const planetsFilter = planets.filter((planet) => {
  //     return !planet.moon;
  //   });
  //   dispatch({ type: "setFilter", payload:planetsFilter });
  // };

  // const showMoons = async () => {
  //   const moonsFilter = planets.filter((planet) => {
  //     return planet.moon;
  //   });
  //   dispatch({ type: "setFilter", payload:moonsFilter });
  // };

  return (
    <div className="planets--section">
      <div className="planets--box-1">
        <h2 className="h2">These are the Planets we offer to travel!</h2>
        <div className="filter--buttons-planets">
{/* 
        <button onClick={showAll}>ALL</button>
        <button onClick={showPlanets}>PLANETS</button>
        <button onClick={showMoons}>MOONS</button> */}
        </div>
      </div>
      {/* REFACTORIZAR !!!!!! */}
      <div className="planets--billboard"> 
        <Render planets={filter}/>
      </div>
    </div>
  );
};

export default Planets;
