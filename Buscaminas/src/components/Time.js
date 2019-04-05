import React, { Component } from 'react';

class Time extends React.Component {
  constructor(props,context){
        super(props,context);
        this.state = {
            segundos: 0
        };
        this.timerTick = this.timerTick.bind(this);
  }
  

  timerTick(){
        this.setState({
            segundos: this.state.segundos + 1
        });


  }
  
  componentDidMount(){
        setInterval(this.timerTick, 1000 );
  }
  
  render() {

    return (
        <h1>{this.state.segundos}</h1>
    );
  }
}

export default Time; 
