import React, { Component } from 'react'
import { Button, Input, Icon,Dropdown,Card} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Modal from './Modal.jsx'
import MakeChannelModal from './MakeChannelModal.jsx'


class Music extends React.Component {
  state = {
    play
  }
  url="http://streaming.tdiradio.com:8000/house.mp3";
  audio = new Audio(this.props.url)

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {this.audio.play()});
  }

  render() {
    return (
      <div>
        {this.togglePlay} 
      </div>
    );
  }
}

export default Music;