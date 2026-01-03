import { supabase } from './supabaseClient';

const BUCKET_NAME = 'navaid.vids';

/**
 * Fetches all videos from the Supabase storage bucket
 * @returns {Promise<Array>} Array of video objects with name and public URL
 */
export const fetchVideosFromBucket = async () => {
  // Check if Supabase is properly configured
  // React automatically loads .env.local, so we check both
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
  
  // If Supabase credentials are not set, use fallback videos immediately
  if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'your_supabase_project_url_here') {
    console.log('Supabase credentials not configured, using fallback videos');
    return getFallbackVideos();
  }

  try {
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .list('', {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' }
      });

    if (error) {
      console.error('Error fetching videos:', error);
      return getFallbackVideos();
    }

    // If no data or empty array, use fallback
    if (!data || data.length === 0) {
      console.log('No videos found in bucket, using fallback videos');
      return getFallbackVideos();
    }

    // Get public URLs for each video
    const videos = await Promise.all(
      data
        .filter(file => file.name.endsWith('.mp4') || file.name.endsWith('.mov') || file.name.endsWith('.webm'))
        .map(async (file) => {
          const { data: urlData } = supabase.storage
            .from(BUCKET_NAME)
            .getPublicUrl(file.name);

          return {
            id: file.id || file.name,
            name: file.name,
            url: urlData.publicUrl,
            createdAt: file.created_at,
            updatedAt: file.updated_at
          };
        })
    );

    // If no videos after filtering, use fallback
    if (videos.length === 0) {
      console.log('No video files found after filtering, using fallback videos');
      return getFallbackVideos();
    }

    return videos;
  } catch (error) {
    console.error('Error in fetchVideosFromBucket:', error);
    // Return fallback videos with provided URLs if Supabase fails
    return getFallbackVideos();
  }
};

/**
 * Gets a signed URL for a video file (valid for 1 hour)
 * @param {string} fileName - Name of the video file
 * @returns {Promise<string>} Signed URL for the video
 */
export const getSignedVideoUrl = async (fileName) => {
  try {
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .createSignedUrl(fileName, 3600); // 1 hour expiry

    if (error) {
      console.error('Error creating signed URL:', error);
      throw error;
    }

    return data.signedUrl;
  } catch (error) {
    console.error('Error in getSignedVideoUrl:', error);
    return null;
  }
};

/**
 * Fallback videos using the provided URLs
 * @returns {Array} Array of video objects
 */
const getFallbackVideos = () => {
  return [
    {
      id: '1',
      name: 'AQPcSNdu35rqJ3WdM6NitY207lkiNMTiuE7CNUfu7KuqlLVR4GyOU35Y-9QjK60gzT7ngtvzqi8CfOuqtytOzeFNO4dIjR2-.mp4',
      url: 'https://ldtlxlinieieqfjfrkwj.supabase.co/storage/v1/object/sign/navaid.vids/AQPcSNdu35rqJ3WdM6NitY207lkiNMTiuE7CNUfu7KuqlLVR4GyOU35Y-9QjK60gzT7ngtvzqi8CfOuqtytOzeFNO4dIjR2-.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wZjgxY2Q4NC03NmUyLTQxNzUtOWU0MS0wY2MwNjU5MmU2NzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJuYXZhaWQudmlkcy9BUVBjU05kdTM1cnFKM1dkTTZOaXRZMjA3bGtpTk1UaXVFN0NOVWZ1N0t1cWxMVlI0R3lPVTM1WS05UWpLNjBnelQ3bmd0dnpxaThDZk91cXR5dE96ZUZOTzRkSWpSMi0ubXA0IiwiaWF0IjoxNzY3Mzk5MzM4LCJleHAiOjE3OTg5MzUzMzh9.mer7En_Uu-PbP8BPuGnxEWs57qvy1Xc_36pDYmzUw8E',
      createdAt: null,
      updatedAt: null
    },
    {
      id: '2',
      name: 'iPad naya laina hai.mp4',
      url: 'https://ldtlxlinieieqfjfrkwj.supabase.co/storage/v1/object/sign/navaid.vids/iPad%20naya%20laina%20hai.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wZjgxY2Q4NC03NmUyLTQxNzUtOWU0MS0wY2MwNjU5MmU2NzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJuYXZhaWQudmlkcy9pUGFkIG5heWEgbGFpbmEgaGFpLm1wNCIsImlhdCI6MTc2NzM5OTM1NiwiZXhwIjoxNzk4OTM1MzU2fQ.r7JY-DmFbSjMeo4qt2BsyCJyCz4rBj-jdwD8YMjp0Ak',
      createdAt: null,
      updatedAt: null
    },
    {
      id: '3',
      name: 'get.mp4',
      url: 'https://ldtlxlinieieqfjfrkwj.supabase.co/storage/v1/object/sign/navaid.vids/get.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wZjgxY2Q4NC03NmUyLTQxNzUtOWU0MS0wY2MwNjU5MmU2NzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJuYXZhaWQudmlkcy9nZXQubXA0IiwiaWF0IjoxNzY3Mzk5MzQ3LCJleHAiOjE3OTg5MzUzNDd9.-sNg5YwYApP116u8B5JfkgFphdiaSYwTxabp6aJJP5k',
      createdAt: null,
      updatedAt: null
    },
    {
      id: '4',
      name: 'Trust me I know physics.mp4',
      url: 'https://ldtlxlinieieqfjfrkwj.supabase.co/storage/v1/object/sign/navaid.vids/Trust%20me%20I%20know%20physics.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wZjgxY2Q4NC03NmUyLTQxNzUtOWU0MS0wY2MwNjU5MmU2NzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJuYXZhaWQudmlkcy9UcnVzdCBtZSBJIGtub3cgcGh5c2ljcy5tcDQiLCJpYXQiOjE3NjczOTkzNjUsImV4cCI6MTc5ODkzNTM2NX0.6ViuMiEg3pL-qe9ZnMopgzLxkocouKFQrdDWJ3MK5uk',
      createdAt: null,
      updatedAt: null
    }
  ];
};

