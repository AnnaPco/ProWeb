import React, { Component } from 'react';
import soundfile from './rocky.mp3';
import Sound from 'react-sound';


class Music extends React.Component
{

	render(){
		return(
			<Sound
			 url={soundfile}
			 playStatus={Sound.status.PLAYING}
			 onLoading={this.handleSongLoading}
			 onPlaying={this.handleSongPlaying}
			 onFinishedPlaying={this.handleSongFinishedPlaying}/>

			);
	}
}
export default Music;