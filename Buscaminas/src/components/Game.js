import React, { Component } from 'react';
import Board from './Board';
import Time from './Time';
import Music from './Music';

class Game extends React.Component {
    render() {
            var divStyle = {
                    width: 100,
                    heigth: 10,
                    textAlign: "center",
                    backgroundColor: "orange",
                    //padding: 2,
                    fontSize:10,
                    fontFamily: "sans-serif",
                    color: "white",
                    borderRadius: 5,
                    justifyContent:"center",
            };


            return (
            <div className="game">
                <div className="game-board">
                <Board/>
                <div style={divStyle}>
                    <Time />
                </div>
                </div>
                <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TO-DO */}</ol>
                </div>
            </div>
            );
    }
}

export default Game;
