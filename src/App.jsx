import {
  Galaxies,
  Planets,
  Home,

  PlanetInfo,
  Login,
  Register,
  Welcome,
} from "./pages/Index";
import Header from "./components/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkSession } from "./redux/Auth/auth.actions";
import Authroute from "./components/Authroute";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";

function App() {

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    token && dispatch(checkSession(token, navigate));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="" element={<Welcome />}/>
        <Route path="corp" element={<Authroute component={<Home />}/>}/>
        <Route path="/planets">
          <Route index element={<Authroute component={<Planets />}/>}/>
          <Route path=":name" element={<Authroute component={<PlanetInfo />}/>}/>
        </Route>
        <Route path="/galaxies" element={<Authroute component={<Galaxies />}/>}/>
        <Route path="/admin" element={<Authroute component={<Admin />}/>}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
