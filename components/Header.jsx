import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <section className="header">
        <h1>OpenGuilds Audio Transcription</h1>
        <p>
          Transcribe the audio below.<br/>
          Every line represents a speaker speaking.<br/>
          Start each line with curley braces {} and a number representing the seconds within the transcription where the line starts.<br/>
          After put the subject in between square brackets [] with a colon : at the end.<br/>
          An example:<br/>
          <pre>
            {'{1}'}[Bob]: There once was a man from peru.<br/>
            {'{3}'}[Alice]: Who dreamed he was eating a shoe.
          </pre>
        </p>
      </section>
    );
  }
}
