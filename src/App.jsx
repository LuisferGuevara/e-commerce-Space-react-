import "./App.scss";
import { Galaxies, Planets, Home, Store } from "./pages/Index";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import PlanetInfo from "./pages/PlanetInfo";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/planets">
          <Route index element={<Planets/>}/>
          <Route path=":name" element={<PlanetInfo/>}/>
        </Route>
        <Route path="galaxies" element={<Galaxies/>} />
        <Route path="store" element={<Store/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
