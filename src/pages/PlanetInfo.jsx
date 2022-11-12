import React from "react";
import { SPACE } from "../utils/data/space";
import "../styles/Planets.scss";
import H3 from "../components/H3";
import { Image } from "../components/Image";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Paragraph from "../components/Paragraph";

const { planets } = SPACE;

const PlanetInfo = () => {

  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <>
      {planets.map((planet) => {
        if (planet.name === name) {
          return (
            <div key={JSON.stringify(planet)} className="planet--card">
              <H3 text={planet.name} />
              <div className="imagen-container">
                <Image text={planet.image} />
              </div>
              <Paragraph text={planet.description} />
              <Paragraph text={planet.gravity} />
              <Paragraph text={planet.distance} />

              <button onClick={() => navigate("/planets")}>ALL PLANETS OFFERS</button>
            </div>
          );
        }
        return "";
      })}
    </>
  );
};

export default PlanetInfo;
