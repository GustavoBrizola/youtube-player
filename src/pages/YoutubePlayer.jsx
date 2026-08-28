import React, { useState } from 'react';
import { youtubeApi } from 'js/YoutubeAPI.js';

export default
function YoutubePlayer() {
    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState('coding tutorials');

    const handleSearch = async() => {
        try {
            const data = await youtubeApi.searchVideos(query);
            setVideos(data.items);
        } catch(error) {
            console.error("Error fetching videos:", error);
        }
    };

    return (
        <div>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <div className="video-grid">
                {videos.map(video => (
                    <div key={video.id.videoId}>
                        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                        <p>{video.snippet.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
