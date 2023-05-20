import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import img1 from './pictures/netflix1.jpg';
import img2 from './pictures/net2.png';
import img3 from './pictures/net3.png';
import img4 from './pictures/net4.png';
import img5 from './pictures/net5.png'
import { useState } from "react";
function App() {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const first = () => {
    setOne(!one);
  }
  const second = () => {
    setTwo(!two);
  }
  const third = () => {
    setThree(!three);
  }
  const fourth = () => {
    setFour(!four);
  }
  const fifth = () => {
    setFive(!five);
  }
  const sixth = () => {
    setSix(!six);
  }
  return (
    <>

      <div className="p-4   space-y-4 bg-[#081634]">
        <div className="flex justify-between  ">
          <h1 className="text-red-600">Netflix</h1>
          <div className="flex space-x-5 ">
            <select className="rounded-md p-2 border-[1px] bg-[rgb(16,16,25)] text-white">
              <option value="">English</option>
              <option value="">Hindi</option>
            </select>
            <button className="bg-[#E40814]  text-white px-5 py-1 rounded-md">Sign In</button>
          </div>
        </div>
        <div className=" flex bg-[url('/src/pictures/netflix1.jpg')]  justify-center items-center rounded-3xl  m-10">

          <div className=" top-[72px]  space-y-7 bg-gradient-to-r py-20 px-16 from-red-900/80 to-slate-900/20 w-full rounded-3xl ">
            <p className="text-white font-extrabold text-7xl">Unlimited movies,TV <br /> shows and more</p>
            <p className="text-white text-3xl">Watch anywhere.Cancel anytime.</p>
            <p className="text-white text-xl">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="space-x-5">
              <input className="p-4 rounded-md bg-slate-800" type="email" placeholder="Email address" />
              <button className="bg-[#E40814] text-white py-3 px-7 text-2xl font-semibold rounded-md">Get Started</button>
            </div>

          </div>
        </div>
        <div className="grid  p-11 gap-5 max-w-[1240px] mx-auto ">

          <div className="   justify-center  md:flex text-white  items-center ">
            <div className="space-y-5">
              <p className="text-6xl font-bold">Watch Everywhere</p>
              <p className="font-semibold text-xl">Stream unlimited movies and TV shows on your phone, tablet, laptop and TV</p>
            </div>
            <img className="" src={img2} alt="" />
          </div>
          <div className=" justify-center  md:flex text-white  items-center">
            <img className="" src={img3} alt="" />
            <div className="space-y-5">
              <p className="text-6xl font-bold">Enjoy on your TV</p>
              <p className="font-semibold text-xl">Watch on smart TVs, PlayStation,Xbox, Chromecast,Apple TV, Blu-ray players and more</p>
            </div>

          </div>
          <div className="justify-center  md:flex text-white  items-center">
            <div className="space-y-5">
              <p className="text-6xl font-bold">Create profiles for kids</p>
              <p className="font-semibold text-xl">Send children on adventures with their favourite characters in a space made just for them-free with your membership</p>
            </div>
            <img className="" src={img4} alt="" />
          </div>
          <div className="justify-center  md:flex text-white  items-center">
            <img className="" src={img5} alt="" />
            <div className="space-y-5">
              <p className="text-6xl font-bold">Download your Showss to watch offline</p>
              <p className="font-semibold text-xl">Save your favourite easily and always have something to watch.</p>
            </div>
          </div>

        </div>
        <div className="grid  gap-4 max-w-[1240px] text-white p-3 mx-auto">
          <p className="font-extrabold text-4xl" >Frequently Asked Questions</p>
          <div className="bg-[#122145]  hover:bg-[#1B2851] flex justify-between p-4  text-[23px] cursor-pointer">
            <p>What is Netflix?</p>
            <p onClick={first} className="font-bold text-4xl">+</p>
          </div>
          <div className={one ? 'flex bg-[#122145] p-3 text-xl transition duration-500' : 'hidden'}>
            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
          </div>
          <div className="bg-[#122145]  hover:bg-[#1B2851] flex justify-between text-[23px] cursor-pointer p-4">
            <p>How much does netflix cost</p>
            <p onClick={second} className="font-bold text-4xl">+</p>
          </div>

          <div className={two ? 'flex bg-[#122145] p-3 text-xl transition duration-500' : 'hidden'}>
            <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
          </div>
          <div className="bg-[#122145]  hover:bg-[#1B2851] flex justify-between text-[23px] cursor-pointer p-4">
            <p>Where can I wacth?</p>
            <p onClick={third} className="font-bold text-4xl">+</p>
          </div>
          <div className={three ? 'flex bg-[#122145] p-3 text-xl transition duration-500' : 'hidden'}>
            <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
          </div>
          <div className="bg-[#122145]  hover:bg-[#1B2851] flex justify-between text-[23px] cursor-pointer p-4">
            <p>How do I cancel?</p>
            <p onClick={fourth} className="font-bold text-4xl">+</p>
          </div>
          <div className={four ? 'flex bg-[#122145] p-3 text-xl transition duration-500' : 'hidden'}>
            <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
          </div>
          <div className="bg-[#122145]  hover:bg-[#1B2851] flex justify-between text-[23px] cursor-pointer p-4">
            <p>What can I watch on Netflix? </p>
            <p onClick={fifth} className="font-bold text-4xl">+</p>
          </div>
          <div className={five ? 'flex bg-[#122145] p-3 text-xl transition duration-500' : 'hidden'}>
            <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
          </div>
          <div className="bg-[#122145]  hover:bg-[#1B2851] flex justify-between text-[23px] cursor-pointer p-4">
            <p>Is Netflix good for kids?</p>
            <p onClick={sixth} className="font-bold text-4xl">+</p>
          </div>
          <div className={six ? 'flex bg-[#122145] p-3 text-xl transition duration-500' : 'hidden'}>
            <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
          </div>
          <div className="grid gap-3 ">
            <p className="font-semibold text-lg">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="space-x-5">
              <input className="p-4 rounded-md bg-slate-800" type="email" placeholder="Email address" />
              <button className="bg-[#E40814] text-white py-3 px-7 text-2xl font-semibold rounded-md">Get Started</button>
            </div>
          </div>

        </div>
        <div className="text-white  max-w-[1240px] items-center justify-center place-content-between grid gap-3  mx-auto">
          <p className="flex">Questions? Call <p> 000-800-919-1694</p></p>
          <div className="grid gap-5 sm:hidden">
            <p className="cursor-pointer hover:underline"> FAQ </p>
            <p className="cursor-pointer hover:underline"> Help Centre </p>
            <p className="cursor-pointer hover:underline"> Account </p>
            <p className="cursor-pointer hover:underline"> Media Centre </p>
            <p className="cursor-pointer hover:underline"> Investor Relations </p>
            <p className="cursor-pointer hover:underline"> Jobs </p>
            <p className="cursor-pointer hover:underline"> Ways to Watch </p>
            <p className="cursor-pointer hover:underline"> Terms of Use </p>
            <p className="cursor-pointer hover:underline"> Privacy </p>
            <p className="cursor-pointer hover:underline"> Cookie Preferences </p>
            <p className="cursor-pointer hover:underline"> Corporate Information </p>
            <p className="cursor-pointer hover:underline"> Contact Us </p>
            <p className="cursor-pointer hover:underline"> Speed Test </p>
            <p className="cursor-pointer hover:underline"> Legal Notices </p>
            <p className="cursor-pointer hover:underline"> Only on Netflix </p>
          </div>
          <div className="hidden sm:flex lg:hidden space-x-24 ">
            <div className="grid gap-3">
              <p className="cursor-pointer hover:underline"> FAQ </p>
              <p className="cursor-pointer hover:underline"> Help Centre </p>
              <p className="cursor-pointer hover:underline"> Account </p>
              <p className="cursor-pointer hover:underline"> Media Centre </p>
              <p className="cursor-pointer hover:underline"> Investor Relations </p>
              <p className="cursor-pointer hover:underline"> Jobs </p>
              <p className="cursor-pointer hover:underline"> Ways to Watch </p>
              <p className="cursor-pointer hover:underline"> Terms of Use </p>
            </div>
            <div className="grid gap-3">
              <p className="cursor-pointer hover:underline"> Privacy </p>
              <p className="cursor-pointer hover:underline"> Cookie Preferences </p>
              <p className="cursor-pointer hover:underline"> Corporate Information </p>
              <p className="cursor-pointer hover:underline"> Contact Us </p>
              <p className="cursor-pointer hover:underline"> Speed Test </p>
              <p className="cursor-pointer hover:underline"> Legal Notices </p>
              <p className="cursor-pointer hover:underline"> Only on Netflix </p>
            </div>
          </div>
          <div className=" lg:flex lg:justify-between space-x-20 hidden ">
            <div className="space-y-5">
              <p className="cursor-pointer hover:underline"> FAQ </p>
              <p className="cursor-pointer hover:underline"> Help Centre </p>
              <p className="cursor-pointer hover:underline"> Account </p>
              <p className="cursor-pointer hover:underline"> Media Centre </p>
              <p className="cursor-pointer hover:underline"> Investor Relations </p>
            </div>
            <div className="space-y-5">
              <p className="cursor-pointer hover:underline"> Jobs </p>
              <p className="cursor-pointer hover:underline"> Ways to Watch </p>
              <p className="cursor-pointer hover:underline"> Terms of Use </p>
              <p className="cursor-pointer hover:underline"> Privacy </p>
              <p className="cursor-pointer hover:underline"> Cookie Preferences </p>
            </div>
            <div className="space-y-5">
              <p className="cursor-pointer hover:underline"> Corporate Information </p>
              <p className="cursor-pointer hover:underline"> Contact Us </p>
              <p className="cursor-pointer hover:underline"> Speed Test </p>
              <p className="cursor-pointer hover:underline"> Legal Notices </p>
              <p className="cursor-pointer hover:underline"> Only on Netflix </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
