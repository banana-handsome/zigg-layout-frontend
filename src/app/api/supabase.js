// @ts-nocheck
import { createClient } from "@supabase/supabase-js";

const VITE_SUPABASE_URL = "https://gdhmasprzbptnlsknzpa.supabase.co"
const VITE_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkaG1hc3ByemJwdG5sc2tuenBhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MDgwMDg2NiwiZXhwIjoyMDU2Mzc2ODY2fQ.jth7D4RXpxQzDvz_t0NNbb5JQ77Xju7kxyBu_DiQCak"

const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);
export default supabase;