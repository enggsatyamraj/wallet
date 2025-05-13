import { createClient } from '@supabase/supabase-js';
import { decode, encode } from 'base-64';
import 'react-native-url-polyfill/auto';

// Fix for "global is not defined" error
if (!global.btoa) {
    global.btoa = encode;
}

if (!global.atob) {
    global.atob = decode;
}

const supabaseUrl = 'https://lafzgmotptrxxjfplhoy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhZnpnbW90cHRyeHhqZnBsaG95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1MjY5MTcsImV4cCI6MjAzMTEwMjkxN30.Eowksr0Qbm5FaO6XP5Nz18gU7VN5RHkKHNvSuKJLPr0';

const supabase = createClient(supabaseUrl, supabaseKey);

export { decode, encode, supabase };
