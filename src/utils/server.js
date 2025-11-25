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
