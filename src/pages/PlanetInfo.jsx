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
  console.log(name);
  const navigate = useNavigate();
  console.log(planets);
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

// const CharacterInfo = () => {
//     const { name } = useParams();
//     const navigate = useNavigate();
//     const [planets, setCharacter] = useState({});
//     useEffect(() => {
//       const getCharacterInfo = async () => {
//         const res = await axios.get(
//           `https://dragon-ball-super-api.herokuapp.com/api/characters/${name}`
//         );
//         console.log(res);
//         setCharacter(res.data);
//       };

//       getCharacterInfo();
//     }, );
//     return (
//       <div key={character.id} className="card alone">
//         <h3>{character.name}</h3>
//         <div className="img--container">
//           <img src={character.imageUrl} alt={character.imageUrl} />
//         </div>
//         <div className="metadata">
//           <p>{character.role}</p>
//           <p>Universo: {character.universe === "0" ? "Por encima de todos" : character.universe}</p>
//           <p>Especie: {character.specie}</p>
//         </div>
//         <button onClick={() => navigate("/characters")}> TODOS LOS PERSONAJES</button>
//       </div>
//     );
//   };

//   export default CharacterInfo;
