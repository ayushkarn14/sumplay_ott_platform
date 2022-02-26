import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';

class VideoApp extends React.Component {
    player = {}
    state = {
        video: {
            src: "assets/playerpics/rickroll.mp4",
            poster: "assets/moviePosters/endgame2.jpg"
        }
    }

    onPlayerReady(player){
        this.player = player;
    }

    render() {
        return (
            <div className="video-player">
                <VideoPlayer
                    controls={true}
                    src={this.state.video.src}
                    poster={this.state.video.poster}
                    onReady={this.onPlayerReady.bind(this)}
                    width={950}
                />
            </div>
        );
    }
}
export default VideoApp;
