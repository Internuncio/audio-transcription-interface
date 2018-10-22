import PropTypes from 'prop-types';
import React from 'react';
import Plyr from 'plyr';

export default class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
  }

  componentDidMount() {
    const player = new Plyr('#player');
  }

  handleTimeUpdate(event) {
    const { onTimeUpdate } = this.props;
    onTimeUpdate(event.target.currentTime);
  }

  render() {
    const {
      audioUrl,
    } = this.props;

    return (
      <audio id="player" controls onTimeUpdate={this.handleTimeUpdate}>
        <source src={audioUrl} type="audio/wav" />
      </audio>
    );
  }
}

Controller.propTypes = {
  audioUrl: PropTypes.string.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
};
