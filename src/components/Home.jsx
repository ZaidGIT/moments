import React from "react";
import DoodleBackground from "./DoodleBackground.jsx";
import Heart from "lucide-react/dist/esm/icons/heart.js";
import Star from "lucide-react/dist/esm/icons/star.js";

const Home = () => {
  React.useEffect(() => {
    localStorage.removeItem('name');
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-0 text-[10vw] font-extrabold text-slate-200 transform -rotate-6 whitespace-nowrap">
          
          Lights will guide you home...
        </div>
        <div className="absolute top-[60%] right-0 text-[12vw] font-extrabold text-slate-300 transform rotate-3 whitespace-nowrap">
          When you try your best but you don't succeed...
        </div>
        <div className="absolute top-[55%] left-[30%] text-[8vw] font-extrabold text-slate-200 whitespace-nowrap">
          ...And ignite your bones
        </div>
      </div>

      <DoodleBackground />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <Heart className="w-16 h-16 text-slate-600 mb-4 animate-pulse" />

        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 text-center">
          The Space Between Us: Measured in Moments.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl text-center">
          Screw the distance; let's cherish the moments that bring us closer
        </p>

        <a
          href="/timeline"
          className="px-6 py-3 bg-slate-800 text-white rounded-full shadow-lg hover:bg-slate-700 transition"
        >
          View Timeline
        </a>
      </div>
    </div>
  );
};

export default Home;
