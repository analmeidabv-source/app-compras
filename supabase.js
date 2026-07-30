const SUPABASE_URL = "...";
const SUPABASE_ANON_KEY = "...";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("✅ Supabase iniciado");