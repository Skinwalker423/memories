import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// export const supabaseUrl =
//   process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supabaseKey = process.env
//   .NEXT_PUBLIC_SUPABASE_ANON_KEY! as string;
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;
