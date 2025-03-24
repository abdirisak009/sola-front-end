
import mediterranean from '../assets/img/mediterranean.jpg'
import katagonicdiet from '../assets/img/katagonicdiet.jpg'
import plantbaseddiet  from '../assets/img/plantbaseddiet.jpg'
import paleodiet  from '../assets/img/paleodiet .jpg'
import intermmitentfasting  from '../assets/img/intermmitentfasting.jpg'
import Dashdiet  from '../assets/img/Dashdiet.jpg'
import protien from '../assets/icons/protien.png'
import fats from '../assets/icons/fats.png'
import carbohydrate from '../assets/icons/carbohydrate.png'
import batchcooks from '../assets/icons/batchcooks.png'
import investment from '../assets/icons/investment.png'
import approach from '../assets/icons/approach.png'
import time from '../assets/icons/time.png'
import fatplantbaseddiets from '../assets/img/plantbaseddiet.jpg'
import React from 'react'

const Nutrition = () => {
  return (
  <>
   <div className='bg-[#44B75E] text-white text-center py-15'>
   <h2 className='text-5xl font-[Roboto] font-bold'>Nutrition & Diet Guide</h2>
   <p className='font-[Roboto] font-semi-bold'>Discover the Science of nutrition, explore different diet types. and learn how to create<br/> blanced meal plans for optical health</p>
   <button className='bg-white rounded-full text-[#44B75E] px-4 py-2 mt-4 font-[Roboto] cursor-pointer'>Explore Diet</button>
   </div>

   <Popular/>
   <Understand/>
   <Balanced/>
   <Frequently/>
  </>
  )
}

// popular section
const Popular=() =>{
  return(
    <>
   <div className='text-center mt-10'>
   <h3 className=' text-2xl font-[Roboto]  font-bold'>Popular Diet Types</h3>
   <p className='font-light font-[Roboto]'>Explore different dietary approaches and find what works best for your body lifesyle</p>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5  my-15 ">
    {/* img 1 */}
<div className="img1">
<img className='w-full rounded-lg' src={mediterranean} alt="" />
   <h3 className='text-xl font-bold my-4 font-[Roboto]'>Mediterranean Diet</h3>
   <p className='font-light font-[Roboto]'>Emphasizes plant foods, olive oil, fish and <br/> moderate wine consuption.Associated with <br/>heart health and longevity</p>
  
    <div className='flex gap-3 font-normal my-6'>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Heart-Health</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Anti-inflammontor</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Sustainable</a>
  </div>
</div>
{/* img 2 */}
<div className="img2">
<img className='w-full rounded-lg' src={katagonicdiet} alt="" />
   <h3 className='text-xl font-bold my-4 font-[Roboto]'>Ketogenic Diet</h3>
   <p className='font-light font-[Roboto]'>Very low-carb, hight-fat diet that shifts the <br/> body  into ketosis. popular for weigh  loss and <br/> metabolic health</p>
   <div className='flex gap-3 font-semi-bold my-6'>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Weigh lose</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Blood suger control</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>High Fat</a>
  </div>
</div>
{/* img 3 */}

<div className="img3">
<img className='w-full rounded-lg' src={plantbaseddiet} alt="" />
   <h3 className='text-xl font-bold my-4 font-[Roboto]'>Plant-Based Diet</h3>
   <p className='font-light font-[Roboto]'>Focuses on foods derived from p;amts with <br/> limited or no animal products. supports<br/> environmental sustainability</p>
   <div className='flex gap-4 font-semi-bold my-6'>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Eco-Friendly</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>High Fiber</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Netrien-Rich</a>
  </div>
</div>

{/* img4 */}

<div className="img4">
<img className='w-full rounded-lg mt-20' src={paleodiet} alt="" />
   <h3 className='text-xl font-bold my-4 font-[Roboto]'>Paleo Diet</h3>
   <p className='font-light font-[Roboto]'>Based on foods presumed  to available  to <br/> paleolithic human. Excludes  grains, dairy <br/> and   processed foods</p>
   <div className='flex gap-4 font-semi-bold my-6'>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Whole foods</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Grain-free</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Low suger</a>
  </div>
</div>

{/* img5 */}
<div className="img5">
<img className='w-full rounded-lg mt-20' src={intermmitentfasting} alt="" />
   <h3 className='text-xl font-bold my-4 font-[Roboto]'>Intermmitent Fasting</h3>
   <p className='font-light font-[Roboto]'>Cycling between pariods of eating and fasting <br/> Various methods  include  16/8,5:2 and <br/> alternate -day fasting.</p>
   <div className='flex gap-4 font-semi-bold my-6'>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Whole foods</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Grain-free</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Low suger</a>
  </div>
</div>

{/* img6 */}

<div className="img6">
<img className='w-full rounded-lg mt-20' src={Dashdiet} alt="" />
   <h3 className='text-xl font-bold my-4'>DASH Diet</h3>
   <p className='font-light font-[Roboto]'>Design to prevent and lower high  blood <br/> pressute.Emphasizes fruits,  vegetables, whole <br/> grains, and low-fat dairy.</p>
   <div className='flex gap-4 font-semi-bold my-6'>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Whole foods</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Grain-free</a>
  <a href="#" className='bg-[#d8ede2] px-2 py-1 rounded-full'>Low suger</a>
  </div>
</div>

   </div>

</>
  )
};

//End popular section


const Understand=()=>{
  return(
    <>
   <div className='text-center'>
   <h2 className='text-2xl font-[Roboto]  font-bold' >Understanding Mocronutrients</h2>
   <p className='font-light font-[Roboto]'>The tree mocronutrients-protein, corbohydrates, and fats each-play vitel roles in your Health</p>
   </div>

   {/* cards */}
 <div className="grid grid-cols1 md:grid-cols-3 gap-7 my-14 mx-6">
  {/* car1 */}
 <div className="car1 shadow-lg bg-gray-100 pl-10 my-6 py-4  w-full">
  <img className='w-9' src={protien} alt="" />
 <h4 className='font-bold my-2 font-[Roboto]'>proteins</h4>
  <p className='font-light font-[Roboto]'>Essential for building and reparing tissues, immune<br/> function ,enzyme production. </p>
  <h4 className='my-5 text-xl text-[#44B75E] font-[Roboto]'>Good Sources</h4>
 

  <p className='font-light font-[Roboto]'><span className='text-[#44B75E] pr-2'>•</span>Lean meats and poultry</p>
  <p className='font-light font-[Roboto]'><span className='text-[#44B75E] pr-2'>•</span>Fish and seafood</p>
  <p className='font-light font-[Roboto]'><span className='text-[#44B75E] pr-2'>•</span>Eggs and dairy</p>
  <p className='font-light font-[Roboto]'><span className='text-[#44B75E] pr-2'>•</span>Legumes and tofu</p>
  <p className='font-light font-[Roboto]'><span className='text-[#44B75E] pr-2'>•</span>Nuts and seeds</p>
 </div>
 {/* car2 */}

 <div className="car1 shadow-lg bg-gray-100 pl-10 my-6 py-4  w-full">
  <img className='w-13' src={carbohydrate} alt="" />
 <h4 className='font-bold my-2 font-[]Roboto'>Carbohydrates</h4>
  <p className='font-light font-[Roboto]'>Primary enargy source for the body , especially the brain <br/> and during high-intensity exercise </p>
  <h4 className='my-5 text-xl text-[#44B75E] font-[Roboto]'>Good Sources</h4>
 

  <p className='font-light font-[Roboto]'><span className='text-[#44B75E] pr-2'>•</span>Whole grains </p>
  <p className='font-light font-[Roboto]'><span className='text-[#44B75E] pr-2'>•</span>Fruits and vegetables</p>
  <p className='font-light font-[Roboto]'><span className='text-[#44B75E] pr-2'>•</span>Legumes and beans</p>
  <p className='font-light font-[Roboto]'><span className='text-[#44B75E] pr-2'>•</span>Sweet Potatoes</p>
  <p className='font-light font-[Roboto]'><span className='text-[#44B75E] pr-2'>•</span>Quinoa and oats</p>
 </div>

 {/* card3 */}

 <div className="car1 shadow-lg bg-gray-100 pl-10 my-6 py-4  w-full">
  <img className='w-11' src={fats} alt="" />
 <h4 className='font-bold my-2 font-[Roboto]'>Fats</h4>
  <p className='font-light font-[Roboto]'>Essential for building and reparing tissues, immune<br/> function ,enzyme production. </p>
  <h4 className='my-5 text-xl text-[#44B75E] font-[Roboto]'>Good Sources</h4>
 

  <p className='font-light font-[Roboto]'><span className='text-[#44B75E] pr-2'>•</span>Avacados</p>
  <p className='font-light font-[Roboto]'><span className='text-[#44B75E] pr-2'>•</span>olive oil and olives</p>
  <p className='font-light font-[Roboto]'><span className='text-[#44B75E] pr-2'>•</span>Nuts and seeds</p>
  <p className='font-light font-[Roboto]'><span className='text-[#44B75E] pr-2'>•</span>fatty fish (salmon)</p>
  <p className='font-light font-[Roboto]'><span className='text-[#44B75E] pr-2'>•</span>Eggs and full-fat yogurt</p>
 </div>

 </div>
    </>
  )
}


function Balanced(){
  return(
    <>
  <div className="title text-center bg-gray-100">
    {/* title */}
  <div className="title py-6">
  <h2 className='text-2xl font-[Roboto]  font-bold'>Balanced Meal Planing</h2>
  <p className='font-light font-[Roboto]'>Create Nutritions, satisfying meals with these simple guidelines</p>
  </div>

{/* plate method */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-3">
    {/* box1 */}
     <div className="shadow-lg bg-[#fff] p-5 my-10">
      <h2 className='py-4 font-bold font-[Roboto]'>The Plate method</h2>
      <img src={plantbaseddiet} alt="" />
    <div className="numbers my-7 ">
    <h3 className='mt-3 font-light font-[Roboto]'><span className='bg-[#d8ede2] rounded-full text-center text-[#44B75E] px-2 py-1 m-4 '>1</span>Fill half your plate whith non-starchy vegetables</h3>
    <h3 className='mt-3 font-light font-[Roboto]'><span className='bg-[#d8ede2] rounded-full  text-[#44B75E] px-2 py-1 m-4 ' >2</span>Fill one quarter with protein-checking, fish, tofo,</h3>
    <h3 className='mt-3 font-light font-[Roboto] mr-14 md:ml-6 '><span className='bg-[#d8ede2] rounded-full text-center text-[#44B75E] px-2 py-1 m-6  '>3</span>Fill one quarter with complex carbohydrates </h3>
    <h3 className='mt-3 font-light font-[Roboto]'><span className='bg-[#d8ede2] rounded-full text-center text-[#44B75E] px-2 py-1 m-4 '>4</span>Add a small amout of health fat-olive oil avocado</h3>


    </div>
     </div>

     {/* box2 */}

      <div className="shadow-lg bg-[#fff] p-5 my-10">
      <h2 className='py-4 font-bold font-[Roboto]'>Meal Prep Tips</h2>

     
      <div className="icon1 flex">
      <span><h3><img className='w-10' src={batchcooks} alt="" /> </h3></span>
      <h3 className='mt-2 font-bold font-[Roboto]'>Batch cooks</h3>
      </div>
      <p className='font-thin font-[Roboto]'> Prepare grains, proteins, and roasted vegetebles in advace for quickly meal assembly, throughout the week.</p>
      
      {/* icon2 */}

      <div className="icon1 flex">
      <span><h3><img className='w-10' src={investment} alt="" /> </h3></span>
      <h3 className='mt-2 font-bold font-[Roboto]'>Invest in quality containers</h3>
      </div>
      <p className='font-thin font-[Roboto]'> Use glass containers with compartments to keep foods seperate and maintain freshness. </p>
      
     
  {/* icon3 */}

  <div className="icon1 flex">
      <span><h3><img className='w-10' src={time} alt="" /> </h3></span>
      <h3 className='mt-2 font-bold font-[Roboto]'>Plan ahead</h3>
      </div>
      <p className='font-thin font-[Roboto]'>Set aside dedicated time each week for meal planing , shopping , and preparation.</p>
      
     {/* icon4 */}

     <div className="icon1 flex">
     <span><h3><img className='w-10' src={approach} alt="" /> </h3></span>
      <h3 className='mt-2 font-bold font-[Roboto]'>use the rainbow approach</h3>
      </div>
      <p className='font-thin font-[Roboto]'>include a variety of colorful  fruits and vegetables to ensure  a wide range of nutrients</p>
      
    <div className="end bg-[#d8ede2] mt-7 p-3">
    <h4 className='pr-90 py-2 font-semi-bold '>Pro Tip</h4>
    <p className='font-thin font-[Roboto]'>Freeze individual of  soups, stews and  casseroles for quick,  nutritious meals when you're  shor on time.</p>
    </div>
      </div>

     
      </div>
      

       </div>

    </>

  )

}
// End cards

// last section frequently

function Frequently(){
  return(
    <>

    <div className="text text-center py-6">
      <h3 className='text-2xl font-bold font-[Roboto]'>Frequently Asked Questions</h3>
      <p>Common Questions about nutriton and diet</p>
    </div>

    <div className=" grid grid-cols-1 md:grid-cols-2 gap-7 ">
      <div className="card1 shadow-lg   p-10">
        <h4 className='font-semi-bold font-4xl font-[Roboto]'>How many calories should I eat per day?</h4>
        <p className='font-light font-[Roboto]'>Caloric needs very based on age , sex , weight, height and activity level . for general  guidance ,  
          about women typically need 1,600-2400 colories per day. while adult man need 2,000-3,000 colories  
          use our calculator  for personalzed recommandations.</p>
      </div>
      {/* car2 */}

          <div className="card2 shadow-lg border-2 border-red-50 p-10 ">
        <h5 className='font-semi-bold font-2xl font-[Roboto]'>What is the different B/w simple and complex corbohydrates?</h5>
        <p className='font-light font-[Roboto]'>Simple carbs like suger and white flour(RDA)
           are quickly digedted  and can spike blood suger complex. 
           carbs like whole graind and vegetables contain fiber digest more slowly, and provide sustained energy with our dramatic blood suger fluctuations.</p>
      </div>

      {/* card3 */}

      <div className="card3 shadow-lg border-2 border-red-50 p-10 ">
        <h5 className='font-semi-bold font-2xl font-[Roboto]'>How much protein do I need?</h5>
        <p className='font-light font-[Roboto]'> The Recommended  Dietary Allowance  (RDA) is 0.8 grames per kilogram of body weight  However , 
          Active individuals while older adults  and those looking to build muscle may benefit frm higher  intake  typicall 12:-2.3g/kg of body weigh</p>
      </div>

    </div>
    </>
  )
}


export default Nutrition;