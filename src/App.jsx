import React, { useEffect, useRef, useState } from "react";
import Scene from "./components/Scene";
import { useGSAP } from "@gsap/react";
import gsap, { Expo } from "gsap";

const App = () => {
  const colors = [
    { col: "#D50032" },
    { col: "#FF6A13" },
    { col: "#a26c39" },
    { col: "#F6EB61" },
    { col: "#1C3F8E" },
    { col: "cyan" },
    { col: "black" },
    { col: "white" },
    { col: "#C0C0C0" },
  ];
  const [hovered, setHoverred] = useState(false);
  const [color, setColor] = useState("cyan")
  const text = useRef();
  const colplate = useRef();

  useEffect(() => {
    if (hovered) {
      gsap.to(text.current, {
        y: "-100%",
        duration: 2.5,
        ease: Expo.easeInOut,
      });
      gsap.to(colplate.current, {
        y: "0%",
        opacity: 1,
        duration: 2,
        ease: Expo.easeInOut,
      });
    } else {
      gsap.to(text.current, {
        y: 0,
        duration: 2.5,
        ease: Expo.easeInOut,
      });
      gsap.to(colplate.current, {
        y: "-50%",
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut,
      });
    }
  }, [hovered]);
  return (
    <div className=" h-screen w-full">
      <Scene hovered={hovered} setHoverred={setHoverred} color={color} />

      <div className=" h-full w-full absolute pointer-events-none top-0 left-0 p-10">
        <nav className=" absolute w-full h-[5vh] sm:h-[5vw]  top-0 left-0 p-10 flex items-center justify-between">
          <h1 className=" text-4xl sm:text-5xl font-[bld]">B</h1>

          <div className=" flex text-2xl sm:text-[1.2vw] font items-center gap-10">
            <p className=" hidden sm:block">HOME</p>
            <p className=" hidden sm:block">DIVO</p>
            <p className=" hidden sm:block">MODELS</p>
            <p className=" hidden sm:block">ABOUT</p>
            <p>
              <i className="ri-menu-line"></i>
            </p>
          </div>
        </nav>

        <div className=" relative left-1/2 -translate-x-1/2 mt-[15vh] sm:mt-[5vw]  w-fit sm:h-[8vw] h-[8vh] overflow-y-hidden">
          <h1
            ref={text}
            className={`text-[7vh] sm:text-[6vw] text-center font-bold font-[reg] txt`}
          >
            BUGATTI
          </h1>
        </div>
        <h1
          className={`text-center font-[reg] text-2xl sm:text-3xl font-bold text-zinc-500 ${
            hovered ? "opacity-0" : "opacity-100"
          } transition-all duration-[2s] ease-in-out`}
        >
          Model - DIVO
        </h1>

        <div className="hidden sm:visible h-[15vw] justify-center p-3 sm:flex flex-col items-center gap-5 w-[4vw] absolute right-0 top-[50%] -translate-x-1/2 -translate-y-1/2">
          <div className=" h-5 w-5 rounded-full border-[3px] border-zinc-700 "></div>
          <div className=" h-5 w-5 rounded-full border-[1px] border-zinc-700 "></div>
          <div className=" h-5 w-5 rounded-full border-[1px] border-zinc-700 "></div>
          <div className=" h-5 w-5 rounded-full border-[1px] border-zinc-700 "></div>
        </div>

        <div ref={colplate} className=" shadow-inner shadow-zinc-300 absolute opacity-0  sm:h-fit sm:w-[17vw] w-[50%] h-fit left-1/2 -translate-x-1/2 sm:left-[10%] top-[15%] rounded-lg flex flex-col items-center justify-start sm:justify-between bg-zinc-50 sm:top-1/2 -translate-y-1/2 p-5">
          <h1 className=" font-[reg] font-bold text-center pb-5">
            CHOOSE YOUR PRESET
          </h1>
          <div className="w-full h-fit flex flex-wrap items-center justify-center gap-3">
            {colors.map((item, index) => {
              return (
                <div onClick={()=>setColor(item.col)} key={index} className=" shadow-md shadow-zinc-400 pointer-events-auto cursor-pointer sm:min-h-[2vw] sm:min-w-[4vw] h-[3vh] w-[5vh] rounded-tl-xl rounded-br-xl transition-all duration-300 hover:border-[3px] hover:border-white" style={{backgroundColor: item.col}}></div>
              );
            })}
          </div>
        </div>

        <div className=" absolute flex justify-center items-center h-[3vw] w-[10vw]  left-1/2 -translate-x-1/2 bottom-[10%] sm:bottom-[5%] -translate-y-1/2">
          <button
            onClick={() => setHoverred(!hovered)}
            className={` pointer-events-auto px-6 py-2 border-[1px] rounded-md font-medium border-zinc-800 font-[reg] transition-all  duration-1000 ${
              hovered ? "bg-[#fff]" : "bg-transparent"
            }`}
          >
            {hovered ? "BACK" : "INTERACT"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
