import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.recognition = this.initializeSpeechRecognition();
  }

  initializeSpeechRecognition() {
    let recognition = new webkitSpeechRecognition();
    recognition.lang = 'ja';

    recognition.onresult = (event) => {
      console.log(event.results[0][0].transcript)
    }

    return recognition;
  }

  record() {
    // 録音開始
    this.recognition.start();
  }

  speech() {
    speechSynthesis.speak(
      new SpeechSynthesisUtterance(this.refs.speech.value)
    );
  }

  render() {
    return(
      <div className="main">
        <h1>Web Speech API</h1>

        <div>
          <button onClick={ () => this.speech() }>Speech</button>
          <input type="text" ref="speech"/>
        </div>

        <div>
          <button onClick={ () => this.record() }>Record</button>
        </div>
      </div>
    );
  }
}
