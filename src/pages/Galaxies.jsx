import React from 'react'
import Render from '../components/Render';
import { SPACE } from "../utils/data/space";
const {galaxies} = SPACE

const Galaxies = () => {
  return (
    <div>
    <Render galaxies={galaxies}/>
  
  </div>
  )
}

export default Galaxies