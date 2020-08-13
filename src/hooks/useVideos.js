import { useState, useEffect } from 'react';
import youtube, { baseParams } from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const res = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: term
      }
    });
    setVideos(res.data.items);
  };

  return [videos, search];
};

export default useVideos;
