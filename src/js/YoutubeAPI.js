// @ts-ignore
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export 
const youtubeApi = {
    async searchVideos(query, maxResults = 10) {
        const response = await fetch (
            `${BASE_URL}/search?part=snippet&maxResults=${maxResults}&q=${query}&type=video&key=${API_KEY}`
        );
        if (!response.ok) throw new Error('YouTube API request failed');
        return response.json();
    },

    async getVideoDetails(videoId) {
        const response = await fetch(
            `${BASE_URL}/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
        );
        if (!response.ok) throw new Error('YouTube API request failed');

        return response.json();
    },
}
