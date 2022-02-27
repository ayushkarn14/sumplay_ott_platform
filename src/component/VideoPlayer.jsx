import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { useLayoutEffect, useState } from 'react';

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
        if(window.innerWidth>=900){
            var ph=window.innerWidth*7.5/12*9/16;
        }
        else{
            var ph=window.innerWidth*8.5/16;
        }
        return (
            <div className="video-player">
                <VideoPlayer
                    controls={true}
                    src={this.state.video.src}
                    poster={this.state.video.poster}
                    onReady={this.onPlayerReady.bind(this)}
                    height={ph}
                />
            </div>
        );
    }
}
export default VideoApp;