import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube, { baseParams } from '../apis/youtube'

class App extends React.Component {
	state = { 
		videos: [],
		selectedVideo: null,
	}

	componentDidMount() {
		this.onTermSubmit('Hello world')
	}

	onTermSubmit = async term => {
		const res = await youtube.get("/search", {
			params: {
				...baseParams,
				q: term
			}
		})
		this.setState({
			selectedVideo: res.data.items[0],
			videos: res.data.items
		})
	}

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video })
	}

	render() {
		return (
			<div className="ui container">
				<SearchBar onTermSubmit={this.onTermSubmit} />
				<div className="ui two column stackable grid">
					<div className="ten wide column">
						<VideoDetail video={this.state.selectedVideo} />
					</div>
					<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
				</div>
			</div>
		)
	}
}

export default App