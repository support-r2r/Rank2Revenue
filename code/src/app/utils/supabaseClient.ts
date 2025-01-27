import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ogrumhorntkgunxwotff.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ncnVtaG9ybnRrZ3VueHdvdGZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0NTIzNDgsImV4cCI6MjA1MTAyODM0OH0.i7QPOmBRnY9CY157QPyCKvGLTlxkYaaoHMIWP6IabuE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
