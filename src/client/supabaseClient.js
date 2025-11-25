// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Access variables prefixed with VITE_ using import.meta.env
const supabaseUrl = "https://pdnkcsuiwqiztqzhrfqk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkbmtjc3Vpd3FpenRxemhyZnFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5MDE4NTYsImV4cCI6MjA3OTQ3Nzg1Nn0.sw59HAB_blhzr9rcVr_Fza96wXcveKcF30clFW8ecNs";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Export the bucket and user ID for easy access in components
export const STORAGE_BUCKET = "moments-imgs";
export const MY_USER_ID = localStorage.getItem('name') || 'zaid';