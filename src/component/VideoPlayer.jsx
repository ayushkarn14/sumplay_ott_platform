import React, {Component} from 'react';
import VideoPlayer from 'react-video-js-player';
import {useLayoutEffect, useState} from 'react';

class VideoApp extends React.Component {
    queryParams = new URLSearchParams(window.location.search)
    landscape = (this.queryParams.get("lndimg") === null) || (this.queryParams.get("lndimg") === "") ? "endgame2.jpg" : this.queryParams.get("lndimg");

    player = {}
    state = {
        video: {
            src: "assets/playerpics/rickroll.mp4",
            poster: `assets/moviePosters/${this.landscape}`
        }
    }

    onPlayerReady(player) {
        this.player = player;
    }

    render() {
        let ph;
        if (window.innerWidth >= 900) {
            ph = window.innerWidth * 7.5 / 12 * 9 / 16;
        } else {
            ph = window.innerWidth * 8.5 / 16;
        }
        window.addEventListener('resize', () => {window.location.reload();
        console.log("okkk")});
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