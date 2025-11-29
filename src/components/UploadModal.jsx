import React, { useRef } from "react";
import { X, Image as ImageIcon, Camera, FileText, Trash2 } from "lucide-react";
import { Loader } from "lucide-react";

const UploadModal = ({
  onSave,
  onClose,
  file,
  setFile,
  desc,
  setDesc,
  open,
  loading,
}) => {
  const galleryInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white/90 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-2xl w-11/12 max-w-lg p-6 relative animate-fade-in">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-700 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
          Add a New Memory
        </h2>

        {/* Compact Preview */}
        {file && (
          <div className="relative w-full h-40 mb-5 rounded-xl overflow-hidden border border-slate-300 bg-slate-100">
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              className="w-full h-full object-cover"
            />

            {/* Remove Icon */}
            <button
              onClick={() => setFile(null)}
              className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-md hover:bg-white transition"
            >
              <Trash2 className="w-4 h-4 text-red-600" />
            </button>
          </div>
        )}

        {/* Options */}
        <div className="flex flex-col gap-4 mb-6">
          {/* Upload from Gallery */}
          <button
            onClick={() => galleryInputRef.current.click()}
            className="w-full py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 flex items-center justify-center gap-2 text-slate-700 transition"
          >
            <ImageIcon className="w-5 h-5" />
            Upload from Gallery
          </button>

          <input
            ref={galleryInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files[0];
              if (f) {
                setFile(f);
                cameraInputRef.current.value = "";
              }
            }}
          />

          {/* Capture with Camera */}
          <button
            onClick={() => cameraInputRef.current.click()}
            className="w-full py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 flex items-center justify-center gap-2 text-slate-700 transition"
          >
            <Camera className="w-5 h-5" />
            Capture with Camera
          </button>

          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files[0];
              if (f) {
                setFile(f);
                galleryInputRef.current.value = "";
              }
            }}
          />
        </div>

        {/* Description */}
        <label className="block mb-6">
          <span className="text-slate-700 font-medium block mb-2 flex items-center gap-2">
            <FileText className="w-4 h-4" /> Description
          </span>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows={3}
            className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none"
            placeholder="Write a short description..."
          />
        </label>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
          >
            Cancel
          </button>

          {loading ? (
            <div className="flex items-center justify-center px-6 py-2 rounded-xl bg-indigo-600 text-white">
              <Loader className="w-5 h-5 animate-spin" />
            </div>
          ) : (
            <button
              onClick={() => onSave(file, desc)}
              className="px-6 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition disabled:opacity-50"
              disabled={!file || !desc}
            >
              Save Memory
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
