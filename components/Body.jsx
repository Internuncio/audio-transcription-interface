import React from 'react';
import Controller from './Controller.jsx';
import Formatter from './Formatter.jsx';
import Transcription from './Transcription.jsx';

export default class Body extends React.Component {
  render() {
    return (
      <div>
        <Formatter />
        <Transcription />
        <Controller audioUrl="https://wetranscribe.s3.amazonaws.com/uploads/chunk/audio/600/converted.wavchunk-4.wav" />
      </div>
    );
  }
}
