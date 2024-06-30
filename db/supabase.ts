import { createClient } from "@supabase/supabase-js";
export const supabaseUrl =
  "https://ttssvvyzajyitpswtvlk.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
