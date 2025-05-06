import React from "react";
import hero from "../assets/images/heroImage.jpg";
import flag from "../assets/images/Flag.png";
import hum from "../assets/images/heroHum.png";
import certificate from "../assets/images/certificate.png";
import HeroWomen from "../assets/images/heroWomen.jpg";
import Header from "./Header";
function Hero() {
  return (
    <>
      <Header />
      <section
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <h1 className="text-center text-5xl leading-16 font-bold py-10">
          Nutrition tracking <br /> for{" "}
          <span className="bg-[#FAA432] text-white px-3">real life</span>
        </h1>
      </section>

      {/* hero Section 2  */}

      <section className="bg-green-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Weight Loss Made Easy</h2>
          <div className="grid md:grid-cols-3 gap-26 ml-26">
            {/* Set Your Goals */}
            <div className=" ">
              <div className=" rounded-full py-2">
                <img src={flag} className="w-20 h-20" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-left">
                Set Your Goals
              </h3>
              <p className="text-sm text-left ">
                Tell us what you want to achieve and receive personalized goals.
              </p>
            </div>

            {/* Track Your Food */}
            <div className="flex flex-col ">
              <div className=" rounded-full py-2">
                <img src={hum} className="w-20 h-20" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-left">
                Track Your Food
              </h3>
              <p className="text-sm  text-left">
                Learn about the foods you’re eating and keep your calories
                within your daily budget!
              </p>
            </div>

            {/* Lose Weight */}
            <div className="flex flex-col ">
              <div className="rounded-full py-2">
                <img src={certificate} className="w-20 h-20" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-left">Lose Weight</h3>
              <p className="text-sm text-left">
                Reach your goals and continue to set new ones for a happier,
                healthier you!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* hero section 3 */}

      <div className="font-sans">
        {/* Section 1 */}
        <section className=" py-12 ">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Image */}
            <div className="w-full md:w-[36%] ml-20">
              <img src={HeroWomen} alt="Track Nutrition" className="mx-9 " />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 bg-[#F4E7E7] py-22 px-7">
              <h2 className="text-5xl  font-bold text-green-700 mb-4">
                Track food, fitness <br /> & fasting
              </h2>
              <p className="text-gray-700 mb-6">
                Tracking calories and macros is simple with Sola Food Tracker.
                Our barcode scanner and device integration make meal tracking
                effortless. Stay on top of your nutrition goals with ease using
                Sola Food Tracker.
              </p>
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full font-medium transition">
                Track Now
              </button>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="text-center py-12 px-6">
          <h3 className="text-3xl font-bold mb-3">
            Start Your Health Journey Today
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Join thousands of users who have transformed their lives with
            NutriTracker. Our easy-to-use app helps you stay on track with your
            nutrition goals.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-medium">
              Download App
            </button>
            <button className="border border-[#0D9B4D] hover:border-gray-600 text-[#0D9B4D] px-5 py-2 rounded-full font-medium">
              Learn More
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
