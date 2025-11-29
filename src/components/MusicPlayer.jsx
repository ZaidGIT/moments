import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Redo2 } from "lucide-react";

const formatSpotifyEmbed = (url) => {
  try {
    const id = url.split("/")[4].split("?")[0];
    return `https://open.spotify.com/embed/track/${id}`;
  } catch {
    return null;
  }
};

const MusicSuggest = ({ open, link, desc, onCloseToggle, onAcknowledge }) => {
  const embed = link ? formatSpotifyEmbed(link) : null;
  const [ack, setAck] = useState(false); // acknowledgment state

  const handleAck = () => {
    setAck(true);
    onAcknowledge && onAcknowledge(); // parent can send DB signal
  };

  return (
    <>
      {/* OPEN BUTTON */}
      {!open && (
        <button
          onClick={onCloseToggle}
          className="
            fixed right-0 top-1/2 z-50
            bg-white border border-slate-300 shadow-lg
            rounded-l-xl px-2 py-2
            hover:bg-slate-100 transition
          "
        >
          <ChevronLeft size={20} strokeWidth={2.5} className="text-slate-700" />
        </button>
      )}

      {/* DRAWER */}
      <div
        className={`
          fixed top-0 right-0 h-full w-81 bg-white
          shadow-2xl border-l border-slate-200 z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* CLOSE BUTTON */}
        {open && (
          <button
            onClick={onCloseToggle}
            className="
              absolute -left-6 top-1/2 -translate-y-1/2
              bg-white border border-slate-300 shadow-md
              rounded-l-xl px-2 py-2
              hover:bg-slate-100 transition
            "
          >
            <ChevronRight
              size={20}
              strokeWidth={2.5}
              className="text-slate-700"
            />
          </button>
        )}

        <div className="p-5 mt-4">
          <h3 className="font-serif text-xl text-slate-900 text-center mb-2">
            Now Playing
          </h3>
          <p className="text-slate-600 text-center text-sm italic mb-4">
            {desc || "Shared song for this moment"}
          </p>

          {/* SPOTIFY PLAYER */}
          {embed ? (
            <iframe
              src={embed}
              width="100%"
              height="85"
              allow="encrypted-media"
              className="rounded-xl shadow-sm border border-slate-200 mb-4"
            />
          ) : (
            <div className="text-center mb-10 mt-6">
              {/* Title */}
              <h4 className="font-serif text-lg text-slate-800 tracking-wide">
                No music shared yet
              </h4>

              {/* Decorative top line */}
              <span className="block w-10 h-[2px] mx-auto bg-gradient-to-r from-indigo-500 to-slate-400 mt-2 mb-4 opacity-70 rounded" />

              {/* Message */}
              <p className="text-slate-600 text-sm leading-relaxed max-w-[260px] mx-auto">
                Share a track that means something — let this moment carry a
                sound.
              </p>

              {/* CTA hint */}
              <p className="text-slate-700 font-medium text-xs mt-3 uppercase tracking-wider">
                Suggest one to begin
              </p>

              {/* Bottom slate divider — NEW */}
              <div className="w-full h-[2px] bg-slate-300 mx-auto mt-5 rounded opacity-70" />
            </div>
          )}
          {/* ACKNOWLEDGEMENT SECTION */}
          {embed && (
            <div className="flex flex-col items-center mt-2">
              {!ack ? (
                <button
                  onClick={handleAck}
                  className="
        flex items-center gap-2 px-4 py-2 rounded-lg
        bg-indigo-600 text-white shadow-sm border border-indigo-500
        hover:bg-indigo-700 transition duration-200
      "
                >
                  <Heart size={16} className="fill-white" />
                  Like this
                </button>
              ) : (
                <div className="flex flex-col items-center text-center space-y-2">
                  <span className="text-sm text-slate-700 font-medium">
                    Marked as liked — they'll know you listened.
                  </span>

                  <button
                    onClick={() => setAck(false)}
                    className="
          flex items-center gap-1 px-3 py-1 rounded-md border border-slate-300
          text-slate-700 text-xs font-medium bg-white shadow-sm
          hover:border-slate-400 hover:bg-slate-50 transition
        "
                  >
                    <Redo2 size={14} strokeWidth={2} />
                    Undo
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MusicSuggest;
