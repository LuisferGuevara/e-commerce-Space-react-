import React from "react";
import "../styles/PlanetInfo.scss";
import H3 from "../components/H3";
import { Image } from "../components/Image";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Paragraph from "../components/Paragraph";
import { useSelector } from "react-redux";



const PlanetInfo = () => {
  const {planets } = useSelector((state) => state.planetsFilter);

  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <div className="planet-info--box">
      {planets.map((planet) => {
        if (planet.name === name) {
          return (
            <div key={JSON.stringify(planet)} className="card">
              <div className="first-box">
                <H3 text={planet.name} />
                <div className="image--box">
                  <Image text={planet.image} />
                </div>
              </div>
              <div className="text--box">
                <div className="text--content">
                  <H3 text={planet.title} />
                  <div className="text--yes">
                  <Paragraph text={planet.description} />
                  <Paragraph text={planet.gravity} />
                  <Paragraph text={planet.distance} />
                  </div>
                  <div className="buying--box">
                    <span>{planet.price}</span>
                    <button>Buy Now</button>
                  </div>
                </div>
                <button className="button" onClick={() => navigate("/planets")}>
                  ALL PLANETS OFFERS
                </button>
              </div>
            </div>
          );
        }
        return "";
      })}
    </div>
  );
};

export default PlanetInfo;
