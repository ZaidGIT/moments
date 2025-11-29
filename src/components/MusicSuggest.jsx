import React from "react";
import { X } from "lucide-react";
import { Loader } from "lucide-react";

const MusicSuggestModal = ({
  open,
  onSave,
  onClose,
  url,
  setUrl,
  lyrics,
  setLyrics,
  loading,
}) => {
  if (!open) return null;

  const handleSubmit = () => {
    if (!url) return;
    if (!validateSpotifyUrl(url)) {
      alert("Please enter a valid Spotify track URL.");
      return;
    }
    onSave({ url, lyrics });
    setUrl("");
    setLyrics("");
    handleClose();
  };

  const handleClose = () => {
    setUrl("");
    setLyrics("");
    onClose();
  }

  const validateSpotifyUrl = (link) => {
    const pattern = /^(https?:\/\/)?(open\.spotify\.com\/(track|album|playlist)\/[a-zA-Z0-9]+)(\?si=[a-zA-Z0-9_-]+)?$/;
    return pattern.test(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 px-4">

      <div className="
        bg-white/90 w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200
        p-6 relative animate-fadeIn backdrop-blur-md
      ">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-600 hover:text-slate-900"
        >
            <X className="w-5 h-5" />
        </button>

        <h2 className="font-serif text-3xl text-slate-900 text-center mb-4 tracking-wide">
          Add Music to this Moment
        </h2>

        <p className="text-slate-600 text-center font-sans text-sm mb-6 italic">
          Share a song + what's on your mind....
        </p>

        {/* INPUTS */}
        <div className="space-y-4">
          <div>
            <label className="block font-sans text-sm text-slate-700 mb-1">
              Spotify Link
            </label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste Spotify track/playlist link..."
              className="
                w-full px-4 py-2 rounded-lg border border-slate-300 
                bg-white shadow-sm font-sans text-sm
                focus:ring-2 focus:ring-indigo-300 focus:outline-none
              "
            />
          </div>

          <div>
            <label className="block font-sans text-sm text-slate-700 mb-1">
              Favorite Lyric / What's on your mind?
            </label>
            <textarea
              value={lyrics}
              onChange={(e) => setLyrics(e.target.value)}
              placeholder="What line hit the heart..."
              rows={4}
              className="
                w-full px-4 py-2 rounded-lg border border-slate-300 
                bg-white shadow-sm font-sans text-sm
                focus:ring-2 focus:ring-indigo-300 focus:outline-none
              "
            />
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={handleClose}
            className="
              px-4 py-2 rounded-lg text-slate-600 border border-slate-300
              hover:bg-slate-100 transition
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={!url.trim()}
            className="
              px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow-sm
              hover:bg-indigo-700 hover:-translate-y-0.5 transition duration-200 disabled:opacity-50
            "
          >
            {loading ? (
              <Loader className="w-5 h-5 animate-spin text-white mx-auto" />
            ) : (
              "Share Music"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicSuggestModal;
