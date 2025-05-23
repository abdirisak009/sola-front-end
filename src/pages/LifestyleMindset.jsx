import React from "react";
import Header from "../components/Header";
import LifestyleHero from "../components/LifestyleHero";
import PowerofMindset from "../components/PowerofMindset";
import StressManagement from "../components/StressManagement";
import SleepOpt from "../components/SleepOpt";
import JoyfulMovement from "../components/JoyfulMovement";
import MindFulness from "../components/MindFulness";
import MindFulnessDaily from "../components/MindFulnessDaily";

const LifestyleMindset = () => {
  return (
    <>
      <Header />
      {/* Hero section*/}
      <section>
        <LifestyleHero />
      </section>
      {/* PowerofMindset section */}
      <section className="bg-[#fff]">
        <PowerofMindset />
      </section>
      {/* StressManagement section */}
      <section className=" bg-gray-100 min-h-screen">
        <StressManagement />
      </section>
      {/* SleepOpt Section */}
      <section className="bg-[#fff] min-h-[90vh]">
        <SleepOpt />
      </section>
      {/* JoyfulMovement Section */}
      <section className="bg-gray-100 min-h-screen">
        <JoyfulMovement />
      </section>
      {/* Mindfullness section */}
      <section className="bg-[#fff] min-h-[90vh]">
        <MindFulness />
      </section>
      {/* last section */}
      <section className="bg-[#fff] min-h-[50vh] py-10">
        <MindFulnessDaily />
      </section>
      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
};

export default LifestyleMindset;
