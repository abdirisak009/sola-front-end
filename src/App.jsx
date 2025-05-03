import React from "react";
import Hero from "./components/Hero";
// import Header from "./components/Header";
import LifestyleMindset from "./pages/LifestyleMindset";
import WeightLose from "./components/WeightLose";
import Nutration from "./pages/Nutration";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import Recipes from "./pages/Recipes";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/Nutration" element={<Nutration />}></Route>
        <Route path="/WeightLose" element={<WeightLose />}></Route>
        <Route path="/Recipes" element={<Recipes />}></Route>
        <Route path="/LifestyleMindset" element={<LifestyleMindset />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
      </Routes>
    </>
  );
};

export default App;
