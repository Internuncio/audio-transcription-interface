import React from 'react';
import PropTypes from 'prop-types';

export default class Transcription extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.addTimestamp = this.addTimestamp.bind(this);

    this.state = {
      cursorPosition: 0,
    };
  }

  handleChange(event) {
    const { onTranscriptionChange } = this.props;
    this.setState({ cursorPosition: event.target.selectionStart });
    onTranscriptionChange(this.parse(event.target.value));
  }

  handleClick(event) {
    this.setState({ cursorPosition: event.target.selectionStart });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.addNewLine();
    }
  }

  addNewLine() {
    const { cursorPosition } = this.state;
    const { onTranscriptionChange, currentTime, value } = this.props;
    const newValue = value.slice(0, cursorPosition)
      + this.formatTime(currentTime)
      + '[Speaker 1]: '
      + value.slice(cursorPosition);
    onTranscriptionChange(this.parse(newValue));
  }

  addTimestamp() {
    const { cursorPosition } = this.state;
    const { onTranscriptionChange, currentTime, value } = this.props;
    const newValue = value.slice(0, cursorPosition)
      + this.formatTime(currentTime)
      + value.slice(cursorPosition);
    onTranscriptionChange(this.parse(newValue));
  }

  formatTime(seconds) {
    return '{' + Math.floor(seconds) + '}';
  }

  parse(text) {
    const linesRegexp = /\n/;
    const lines = text.split(linesRegexp);

    return lines.map(line => this.parseLine(line));
  }

  parseLine(line) {
    const subjectRegexp = /\[(.*?)\]:/;
    const timestampsRegexp = /{(.*?)}/;

    let subjects = line.match(subjectRegexp);
    let timestamps = line.match(timestampsRegexp);

    if (subjects == null) {
      subjects = ['', ''];
    }

    if (timestamps == null) {
      timestamps = ['', ''];
    }

    return {
      subject: subjects[1],
      start: timestamps[1],
      rawText: line,
      text: line.split(subjectRegexp).pop(),
    };
  }

  render() {
    const {
      value,
    } = this.props;

    return (
      <section className="transcription">
        <textarea
          value={value}
          onChange={this.handleChange}
          onClick={this.handleClick}
          onKeyUp={this.handleKeyPress}
        />
        <button type="button" onClick={this.addTimestamp}>Add Timestamp</button>
      </section>
    );
  }
}

Transcription.propTypes = {
  value: PropTypes.string,
  currentTime: PropTypes.number,
  onTranscriptionChange: PropTypes.func.isRequired,
};

Transcription.defaultProps = {
  value: '',
  currentTime: 0,
};
