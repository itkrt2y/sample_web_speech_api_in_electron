import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.recognition = this.initializeSpeechRecognition();
  }

  initializeSpeechRecognition() {
    window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    let recognition = new webkitSpeechRecognition();
    recognition.lang = 'ja';

    // 録音終了時トリガー
    recognition.addEventListener('result', (event) => {
      console.log(event.results.item(0).item(0).transcript)
    }, false);

    return recognition;
  }

  speech() {
    // 録音開始
    this.recognition.start();
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
