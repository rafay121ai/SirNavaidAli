import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://ldtlxlinieieqfjfrkwj.supabase.co'
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || ''

// Create Supabase client with fallback values
// Note: If REACT_APP_SUPABASE_ANON_KEY is not set, some operations may fail
// but the app will use fallback videos from videoService.js
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)
