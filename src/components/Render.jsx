import React from "react";
import { Link } from "react-router-dom";
import H3 from "./H3";
import { Image } from "./Image";
import Paragraph from "./Paragraph";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../utils/services/api";
import { getPlanets } from "../redux/Planets/planets.action";
import CreatePlanet from "./CreatePlanet";
import "../styles/Galaxies.scss";

const Render = ({ galaxies, planets }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const deletePlanet = async (id) => {
    await API.delete("planets/delete/" + id);
    dispatch(getPlanets());
  };

  return (
    <>
      {galaxies &&
        galaxies.map((galaxy) => {
          return (
            <div key={JSON.stringify(galaxy)} className="galaxies--container">
              <div className="galaxy-card">
                <div className="galaxy--main">
                  <H3 text={galaxy.name} />
                  <div className="imagen-galaxy">
                    <Image text={galaxy.image} />
                  </div>
                </div>
                <div className="galaxy--text">
                  <Paragraph text={galaxy.description} />
                  <Paragraph text={galaxy.gravity} />
                  <Paragraph text={galaxy.distance} />
                  <span>Price: {galaxy.price}</span>

                  <button>Buy Experience</button>
                </div>
              </div>
            </div>
          );
        })}

      {user?.rol === "admin" && <CreatePlanet />}
      {user?.rol === "admin" &&
        planets &&
        planets.map((planet) => {
          return (
            <div key={JSON.stringify(planet)} className="planet--card planet--card__X">
              <H3 text={planet.name} />
              <div className="imagen-container">
                <Image text={planet.image} />
              </div>
              <div className="text--content">
                <H3 text={planet.title} />
                <div className="text--yes">
                  <Paragraph text={planet.description} />
                  <Paragraph text={planet.gravity} />
                  <Paragraph text={planet.distance} />
                </div>
              </div>
              <div className="buttons--box">
                <button onClick={() => deletePlanet(planet._id)}>Delete</button>
                <Link to={`/edit/${planet._id}`}>EDIT</Link>
              </div>
            </div>
          );
        })}

      {user?.rol === "user" &&
        planets &&
        planets.map((planet) => {
          return (
            <div key={JSON.stringify(planet)} className="planet--card">
              <H3 text={planet.name} />
              <div className="imagen-container">
                <Image text={planet.image} />
              </div>
              <Link to={`/planets/${planet.name}`} className="link--see-more">
                {" "}
                SEE MORE
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default Render;
