import React from 'react';
import Controller from './Controller.jsx';
import Formatter from './Formatter.jsx';
import Transcription from './Transcription.jsx';
import Form from './Form.jsx';

import QS from 'uqs'

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);

    const defaultData = [{
      start: '0',
      rawText: '{0}[Subject 1]: ',
      text: '',
      subject: 'Subject 1',
    }];

    const query = QS.parse(window.location.search);
    let { data } = query;

    if (data === undefined) {
      data = defaultData;
    } else {
      data = JSON.parse(data);
    }

    this.state = {
      data: data,
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

    const query = QS.parse(window.location.search);

    let {
      submitTo,
    } = query;

    const {
      turkSubmitTo,
      assignmentId,
      audioUrl,
    } = query;


    if (submitTo == null) {
      submitTo = turkSubmitTo + '/mturk/externalSubmit';
    }


    return (
      <div>
        <Formatter />
        <Transcription
          onTranscriptionChange={this.handleDataChange}
          value={data.map(x => x.rawText).join('\n')}
          currentTime={currentTime}
        />
        <Controller
          audioUrl={audioUrl}
          onTimeUpdate={this.handleTimeChange}
        />
        <Form assignmentId={assignmentId} data={JSON.stringify(data)} submitUrl={submitTo} />
      </div>
    );
  }
}
