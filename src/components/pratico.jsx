import React from 'react'

const pratico = () => {
  return (
    <div>
      <section className="bg-[#22C55E] text-white text-center py-10  mt-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Your Weight Loss Journey Starts Here
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover science-backed strategies, meal plans, and success stories to help you achieve
          your weight loss goals in a healthy, sustainable way.
        </p>
        <button className="bg-white text-green-600 font-semibold py-3 px-6 rounded-full text-lg shadow-md hover:bg-gray-100 transition">
          Start Your Journey
        </button>
      </div>
    </section>
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-2">Weight Loss Guidance</h2>
      <p className="text-gray-600 text-center mb-8">
        Follow these evidence-based principles to lose weight effectively and keep it off long-term
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-start">
          <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-full mb-4">
            <span className="text-green-600 text-xl">🎯</span>
          </div>
          <h3 className="text-lg font-semibold">Set Realistic Goals</h3>
          <p className="text-gray-600 mt-2">
            Aim for 1–2 pounds per week of weight loss. This pace is sustainable and helps preserve muscle mass while losing fat.
          </p>
        </div>

        <div className="bg-white p-3 rounded-2xl shadow-md flex flex-col items-start">
          <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-full mb-4">
            <span className="text-green-600 text-xl">⚖️</span>
          </div>
          <h3 className="text-lg font-semibold">Create a Calorie Deficit</h3>
          <p className="text-gray-600 mt-2">
            Consume fewer calories than you burn. A deficit of 500–750 calories per day is generally effective for sustainable weight loss.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-start">
          <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-full mb-4">
            <span className="text-green-600 text-xl">🥗</span>
          </div>
          <h3 className="text-lg font-semibold">Focus on Nutrient Density</h3>
          <p className="text-gray-600 mt-2">
            Choose foods that provide the most nutrients for the fewest calories. This helps you feel satisfied while eating less.
          </p>
        </div>
      </div>
    </div>
 
    </div>
  )
}

export default pratico
