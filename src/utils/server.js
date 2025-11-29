import { supabase } from "../client/supabaseClient";
import { STORAGE_BUCKET, MY_USER_ID } from "../client/supabaseClient";

/** fetches all from 'timeline table
 * @returns {Promise<Array>} Array of timeline records
 */

export async function fetchTimelineData() {
  const { data, error } = await supabase
    .from("timeline")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching timeline data:", error);
    throw new Error("Failed to fetch timeline data.");
  }

  return data;
}

/** helper to format timestamp cleanly
 * @param {string} timestamp - ISO timestamp string
 * @return {string} Formatted date string
 */

export function formatTimestamp(timestamp) {
  return new Date(timestamp).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**upload to bucket and db
 * @param {File} file - The file to upload
 * @param {string} description - Description of the file
 * @returns {Promise<string>} Public URL of the uploaded file
 */

const generateFilePath = (file) => {
  return `${MY_USER_ID}/${Date.now()}_${file.name.replace(/\s/g, "_")}`;
};

export async function addMoment(file, description) {
  const filePath = generateFilePath(file);

  // 1. Upload the file to Supabase Storage
  const { error: uploadError } = await supabase.storage
    .from(STORAGE_BUCKET)
    .upload(filePath, file);

  if (uploadError) {
    window.alert(uploadError.message);
    console.error("Storage Upload Error:", uploadError);
    throw new Error("Failed to upload photo.");
  }

  // 2. Get the public URL for the uploaded file
  const { data: publicUrlData } = supabase.storage
    .from(STORAGE_BUCKET)
    .getPublicUrl(filePath);

  // You must set the Storage policy in Supabase Dashboard to allow public reads!
  const img_url = publicUrlData.publicUrl;

  const { error: insertError } = await supabase
    .from("timeline") // Ensure this is your correct table name
    .insert([
      {
        img_url: img_url,
        desc: description,
        user_id: MY_USER_ID, // Use your defined ID
      },
    ]);
    
  if (insertError) {
    console.error("Database Insert Error:", insertError);
    throw new Error("Failed to save timeline data.");
  }

  return img_url;
}

/** uploads music suggestion to 'music_suggestions' table
 * @param {string} url - Spotify track/playlist URL
 * @param {string} lyrics - Favorite lyric or meaning
 * @returns {Promise<void>}
 */

export async function addMusic(url, lyrics) {
  const { error } = await supabase.from("music")
  .insert([
    {
      music_url: url,
      note: lyrics,
      suggested_by  : MY_USER_ID,
      seen: false,
    },
  ]);

  if (error) {
    console.error("Error adding music suggestion:", error);
    throw new Error("Failed to add music suggestion.");
  }

  return;
}

/** marks a music suggestion as seen
 * @param {number} id - ID of the music suggestion
 * @returns {Promise<void>}
 */

export async function setMusicSeen(id) {
  const { error } = await supabase.from("music")
  .update({ seen: true})
  .eq("id", id);

  if (error) {
    console.error("Error marking music as seen:", error);
    throw new Error("Failed to mark music as seen.");
  }

  return;
}

/** fetches a music suggestion
 * @returns {Promise<Object|null>} Music suggestion record or null if none
 */

export async function fetchMusicSuggestion() {
  const { data, error } = await supabase
    .from("music")
    .select("*")
    .eq("seen", false)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();
    
  if (error) {
    console.error("Error fetching music suggestion:", error);
    throw new Error("Failed to fetch music suggestion.");
  }

  return data;
}