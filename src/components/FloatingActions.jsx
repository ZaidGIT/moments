import { Plus, Heart, Music3 } from "lucide-react";
import { useState } from "react";

const FloatingActions = ({ onImageClick, onMusicClick }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-12 right-12 z-50 select-none">

      {/* Orbit Actions */}
      <div className={`relative transition-all duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}>

        {/* Heart — Top Arc (45° from center) */}
        <button
          onClick={onImageClick}
          className={`
            absolute -top-[110px] -left-[35px]  /* angle + radius */
            p-4 rounded-full bg-white border border-slate-200 shadow-xl
            hover:bg-slate-50 hover:-translate-y-1 hover:shadow-2xl
            transition duration-300 flex items-center justify-center
            ${open ? "scale-100" : "scale-0"}
          `}
        >
          <Heart className="w-6 h-6 text-indigo-600 fill-indigo-600" />
        </button>

        {/* Music — Lower Arc (135° from center) */}
        <button
          onClick={onMusicClick}
          className={`
            absolute -top-[35px] -left-[110px] /* same radius, rotated position */
            p-4 rounded-full bg-white border border-slate-200 shadow-xl
            hover:bg-slate-50 hover:-translate-y-1 hover:shadow-2xl
            transition duration-300 flex items-center justify-center
            ${open ? "scale-100" : "scale-0"}
          `}
        >
          <Music3 className="w-6 h-6 text-indigo-600 fill-indigo-600" />
        </button>

      </div>

      {/* Main Center FAB */}
      <button
        onClick={() => setOpen(!open)}
        className="
          p-6 rounded-full bg-indigo-600 shadow-xl text-white
          hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-2xl
          transition duration-300 flex items-center justify-center
        "
      >
        <Plus
          className={`w-7 h-7 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        />
      </button>

    </div>
  );
};

export default FloatingActions;