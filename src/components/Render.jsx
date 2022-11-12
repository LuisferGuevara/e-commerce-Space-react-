import React from "react";
import { Link } from "react-router-dom";
import H3 from "./H3";
import { Image } from "./Image";
import Paragraph from "./Paragraph";


const Render = ({galaxies, planets}) => {

  return (
    <>
      { galaxies  && galaxies.map((galaxy) => {
        return (
          <div key={JSON.stringify(galaxy)}>
            <H3 text={galaxy.name}/>
            <div className="imagen-container">
              <Image text={galaxy.image}/>
            </div>
            <Paragraph text={galaxy.distance}/>
            <Paragraph text={galaxy.gravity}/>
            <Paragraph text={galaxy.description}/>
          </div>
        );
      })}

      {planets && planets.map((planet) => {
        return (
          <div key={JSON.stringify(planet)} className="planet--card">
            <H3 text={planet.name}/>
            <div className="imagen-container">
              <Image text={planet.image}/>
            </div>
            <Link to={`/planets/${planet.name}`} className="link--see-more"> SEE MORE</Link>
          </div>
        );
      })}
    </>

  );
};

export default Render;
