import React from "react";
import { X } from "lucide-react";

const ImageTutorial = ({ targetRef, onClose }) => {
  const [position, setPosition] = React.useState(null);

  React.useEffect(() => {
    const updatePosition = () => {
      if (!targetRef?.current) return;

      const rect = targetRef.current.getBoundingClientRect();

      setPosition({
        top: rect.bottom + 18,
        left: rect.left + rect.width / 2,
      });
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [targetRef]);

  if (!position) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Soft overlay */}
      <div
        className="absolute inset-0 bg-slate-900/20 backdrop-blur-[1px]"
        onClick={onClose}
      />

      {/* Tooltip */}
      <div
        className="absolute pointer-events-auto"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
          transform: "translateX(-50%)",
        }}
      >
        {/* Hand-drawn arrow */}
        <div className="absolute left-1/2 -top-8 -translate-x-1/2">
          <svg
            width="55"
            height="40"
            viewBox="0 0 55 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 5C17 10 27 17 37 30"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-slate-700"
            />
            <path
              d="M29 27L37 30L34 21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-slate-700"
            />
          </svg>
        </div>

        {/* Doodle card */}
        <div
          className="
            relative
            bg-[#fffdf7]
            border-2 border-slate-700
            rounded-2xl
            px-5 py-4
            shadow-[4px_5px_0px_rgba(51,65,85,0.25)]
            rotate-[-1deg]
            w-[260px]
          "
        >
          {/* Tiny doodle heart */}
          <div className="absolute -top-4 -right-3 text-indigo-500 rotate-12">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>

          <button
            onClick={onClose}
            className="
              absolute top-2 right-2
              text-slate-400
              hover:text-slate-700
              transition
            "
            aria-label="Close tutorial"
          >
            <X size={17} />
          </button>

          <p className="font-serif text-xl text-slate-900 mb-1">
            Tap a memory ✨
          </p>

          <p className="text-sm text-slate-600 leading-relaxed">
            Click any photo to open it and see the moment up close.
          </p>

          <button
            onClick={onClose}
            className="
              mt-3
              text-xs
              font-medium
              text-indigo-700
              hover:text-indigo-900
              transition
            "
          >
            Got it ♡
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageTutorial;