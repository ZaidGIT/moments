import React from "react";
import Heart from "lucide-react/dist/esm/icons/heart.js";
import DoodleBackground from "./DoodleBackground";

const WelcomeModal = () => {
  const [name, setName] = React.useState("");

  const handleSubmit = (e) => {
    if (!name) return;
    e.preventDefault();
    if (
      name.toLowerCase() === "yakshi" ||
      name.toLowerCase() === "zaid" ||
      name.toLowerCase() === "yakshi gupta" ||
      name.toLowerCase() === "zaid madari"
    ) {
      localStorage.setItem("name", name);
      window.location.reload();
    } else {
      alert(
        "Hmm, that name doesn't ring a bell. Are you sure you're my twin? 😅"
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-md flex items-center justify-center z-50 p-4 ">
      <DoodleBackground />
      <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl border border-slate-200">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <Heart className="w-12 h-12 text-slate-700" />
          </div>

          <h1 className="font-['Caveat'] text-5xl text-slate-900 mb-2">
            Moments
          </h1>

          <p className="text-slate-600 italic mb-4 text-xl">
            "Look at the stars, look how they shine for you"
          </p>
        </div>

        <form onSubmit={() => {}} className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-slate-700 mb-2 text-center">
              Let me just confirm if your my twin :)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name hon..."
              className="border-slate-300 focus:border-slate-500 rounded-l w-full p-4 text-lg outline-none"
              required
              autoFocus
            />
          </div>

          <button
            type="button"
            className="w-full bg-slate-800 text-white py-2 text-xl rounded-full transition text-lg font-medium hover:cursor-pointer focus:outline-none hover:bg-slate-700"
            onClick={handleSubmit}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default WelcomeModal;
