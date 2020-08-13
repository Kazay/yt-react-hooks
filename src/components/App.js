import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('Painting');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui two column stackable grid">
        <div className="ten wide column">
          <VideoDetail video={selectedVideo} />
        </div>
        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
      </div>
    </div>
  );
};

export default App;
