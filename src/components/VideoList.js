import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ( { onVideoSelect, videos }) => {
	const renderedList = videos.map((video) => <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.id.videoId} />)

	return (
		<div className="six wide column">
			<span>{videos.length} results</span>
			<div className="ui relaxed divided list">
				{renderedList}
			</div>
		</div>
	)
}

export default VideoList