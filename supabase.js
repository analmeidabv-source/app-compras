const SUPABASE_URL = "https://botdobqiroytelonuvym.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_2fF1l8eN1bQfXwIqUxPFeg_pWNJgwiX";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("✅ Supabase iniciado");