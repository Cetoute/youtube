import React from 'react';
import VideoIdem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
	const renderedList = videos.map((video) => {
		return <VideoIdem onVideoSelect={onVideoSelect} video={video} />;
	});
	return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
