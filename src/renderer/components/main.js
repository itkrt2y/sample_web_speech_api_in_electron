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

  record() {
    // 録音開始
    this.recognition.start();
  }

  speech() {
    speechSynthesis.speak(
      new SpeechSynthesisUtterance(this.refs.record.value)
    );
  }

  render() {
    return(
      <div className="main">
        <h1>Web Speech API</h1>

        <div>
          <button onClick={ () => this.speech() }>Speech</button>
          <input type="text" ref="record"/>
        </div>

        <div>
          <button onClick={ () => this.record() }>Record</button>
        </div>
      </div>
    );
  }
}
