import React from "react";
import Hero from "./components/Hero";
// import Header from "./components/Header";
import LifestyleMindset from "./pages/LifestyleMindset";
import WeightLose from "./components/WeightLose";
import SingIn from "./components/SignIn";
import Nutration from "./pages/Nutration";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/Nutration" element={<Nutration />}></Route>
        <Route path="/WeightLose" element={<WeightLose />}></Route>
        <Route path="/SingIn" element={<SingIn />}></Route>
        <Route path="/LifestyleMindset" element={<LifestyleMindset />}></Route>
      </Routes>
    </>
  );
};

export default App;
