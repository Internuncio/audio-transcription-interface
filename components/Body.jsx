import React from 'react';
import Controller from './Controller.jsx';
import Formatter from './Formatter.jsx';
import Transcription from './Transcription.jsx';
import Form from './Form.jsx';


export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);

    this.state = {
      data: [{
        start: '0',
        rawText: '{0}[Subject 1]: ',
        text: '',
        subject: 'Subject 1',
      }],
      currentTime: 0,
    };
  }

  handleDataChange(value) {
    this.setState({ data: value });
  }

  handleTimeChange(value) {
    this.setState({ currentTime: value });
  }

  render() {
    const {
      data,
      currentTime,
    } = this.state;

    return (
      <div>
        <Formatter />
        <Transcription
          onTranscriptionChange={this.handleDataChange}
          value={data.map(x => x.rawText).join('\n')}
          currentTime={currentTime}
        />
        <Controller
          audioUrl="https://s3.amazonaws.com/wetranscribe/uploads/chunk/audio/575/converted.wavchunk-60.wav"
          onTimeUpdate={this.handleTimeChange}
        />
        <Form assignmentId="xxx" data={JSON.stringify(data)} submitUrl="www.google.ca" />
      </div>
    );
  }
}
