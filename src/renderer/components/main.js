import React, { Component } from 'react';

export default class Main extends Component {
  speech() {
    speechSynthesis.speak(
      new SpeechSynthesisUtterance("Hello World!")
    );
  }

  render() {
    return(
      <div className="main">
        <h1>Web Speech API</h1>
        <button onClick={ () => this.speech() }>Speech</button>
      </div>
    );
  }
}
