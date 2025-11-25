import React from "react";
import WelcomeModal from "./WelcomeModal.jsx";
import DoodleBackground from "./DoodleBackground.jsx";
import {
  fetchTimelineData,
  formatTimestamp,
  addMoment,
} from "../utils/server.js";
import Heart from "lucide-react/dist/esm/icons/heart.js";
import Calendar from "lucide-react/dist/esm/icons/calendar.js";
import UploadModal from "./UploadModal.jsx";

const Timeline = () => {
  const name = localStorage.getItem("name");
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [file, setFile] = React.useState(null);
  const [description, setDescription] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);

  const loadTimeline = async () => {
    try {
      setLoading(true);
      const data = await fetchTimelineData();
      setPosts(data);
    } catch (error) {
      console.error("Error loading timeline:", error);
    } finally {
      setLoading(false);
    }
  };

  const addPost = async () => {
    try {
      setLoading(true);
      await addMoment(file, description, name);
      setFile(null);
      setDescription("");
      loadTimeline();
    } catch (error) {
      console.error("Error adding moment:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    // e.preventDefault();
    if (!file || !description) {
      alert("Please select a photo and enter a description.");
      return;
    }
    addPost();
    setShowModal(false);
  };

  React.useEffect(() => {
    loadTimeline();
  }, []);

  if (!name) {
    return <WelcomeModal />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <DoodleBackground />
      </div>

      <header className="text-center pt-12 pb-16 px-4 md:px-0 relative">
        <div
          className="w-16 h-0.5 bg-slate-400 mx-auto opacity-70 mb-4"
          aria-hidden="true"
        />

        <h2 className="text-5xl md:text-6xl font-serif text-slate-900 tracking-widest mb-1 uppercase">
          M O M E N T S
        </h2>

        <p className="text-xl text-slate-700 font-sans tracking-wide max-w-2xl mx-auto italic">
          The chronicles of our journey together, across distance.
        </p>

        <div className="flex items-center justify-center mt-4">
          <span className="text-sm text-slate-500 font-sans mr-4">
            And I will try to fix you...
          </span>
          <div
            className="w-16 h-0.5 bg-slate-400 opacity-70"
            aria-hidden="true"
          />
        </div>
      </header>

      <div className="relative z-10 p-4 md:p-8 max-w-3xl mx-auto">
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setShowModal(true)}
            className="
      p-4 rounded-full 
      bg-white shadow-xl 
      border border-slate-200 
      hover:bg-slate-50 
      transition-all 
      flex items-center justify-center
      hover:-translate-y-1 
      hover:shadow-2xl
      duration-200
    "
          >
            <Heart className="w-6 h-6 text-indigo-600 fill-indigo-600" />
          </button>
        </div>

        <UploadModal
          onSave={handleSubmit}
          onClose={() => setShowModal(false)}
          file={file}
          setFile={setFile}
          desc={description}
          setDesc={setDescription}
          open={showModal}
        />

        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 text-slate-600">
            <div className="w-10 h-10 border-4 border-indigo-300 border-t-indigo-600 rounded-full animate-spin mb-4"></div>

            <p className="text-lg font-medium tracking-wide text-slate-600">
              Fetching your memories...
            </p>

            <p className="text-sm text-slate-500 mt-1">Please wait a moment</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-600">
            <div className="w-20 h-20 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-indigo-600 fill-indigo-600"
                viewBox="0 0 16 16"
              >
                <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385C2.98 10.174 5.94 12 8 13.5c2.06-1.5 5.02-3.326 6.286-6.062.955-1.886.837-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748z" />
              </svg>
            </div>

            <p className="text-2xl font-semibold text-slate-700">
              No moments yet
            </p>

            <p className="text-slate-500 mt-1 max-w-xs text-center leading-relaxed text-xl">
              Click the heart button below and get started mi love!
            </p>
          </div>
        ) : (
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-[2px] bg-slate-300"></div>

            <div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
                            bg-white rounded-full shadow-md p-2 border border-slate-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-6 h-6 text-indigo-600"
              >
                <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385C2.98 10.174 5.94 12 8 13.5c2.06-1.5 5.02-3.326 6.286-6.062.955-1.886.837-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748z" />
              </svg>
            </div>

            <div className="flex flex-col items-center py-10 relative bg-transparent min-h-screen">
              <div
                className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-slate-300 h-full hidden md:block z-0"
                aria-hidden="true"
              />

              <div className="space-y-12 w-full max-w-5xl">
                {posts.map((post) => {
                  const name = localStorage.getItem("name") || "";
                  const startsSameLetter =
                    post.user_id?.[0]?.toLowerCase() ===
                    name?.[0]?.toLowerCase();

                  const isRight = !startsSameLetter;

                  const bgColor = isRight ? "bg-amber-50" : "bg-indigo-50";
                  const iconColor = isRight
                    ? "text-amber-700"
                    : "text-indigo-700";

                  return (
                    <div
                      key={post.id}
                      className={`flex justify-center w-full ${
                        isRight ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      <div
                        className={`w-11/12 md:w-[45%] p-5 rounded-2xl shadow-lg relative z-10 ${bgColor} border border-slate-200 
                            ${isRight ? "md:mr-[30px]" : "md:ml-[30px]"}`}
                      >
                        {/* Heart Dot */}
                        <div
                          className={`absolute w-8 h-8 rounded-full bg-white border-2 border-slate-300 shadow-md flex items-center justify-center 
                                top-1/4 transform -translate-y-1/2 z-20 ${
                                  isRight ? "-right-[40px]" : "-left-[40px]"
                                }`}
                        >
                          <Heart
                            className={`w-4 h-4 ${iconColor} fill-current`}
                          />
                        </div>

                        <div className="aspect-video overflow-hidden rounded-xl mb-3 border border-slate-100">
                          <img
                            src={post.img_url}
                            alt={post.desc}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="p-2">
                          <div className="flex items-center gap-2 text-slate-600 mb-1 font-sans text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{formatTimestamp(post.created_at)}</span>
                          </div>
                          <p className="font-serif text-slate-900 text-lg mb-1">
                            {post.desc}
                          </p>
                          <p className="text-slate-700 text-sm">
                            – {post.user_id}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
