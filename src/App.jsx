import {
  Galaxies,
  Planets,
  Home,
  Store,
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
        <Route path="" element={<Welcome />} />
        <Route path="corp" element={<Home />} />
        <Route path="/planets">
          <Route index element={<Planets />} />
          <Route path=":name" element={<PlanetInfo />} />
        </Route>
        <Route path="/galaxies" element={<Galaxies />} />
        <Route path="/store" element={<Store />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
