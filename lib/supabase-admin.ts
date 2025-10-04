// lib/supabase/admin.ts
import "server-only";
import { createClient } from "@supabase/supabase-js";

export function supabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!; // bypass RLS côté serveur
  return createClient(url, key, { auth: { persistSession: false } });
}
