import PropTypes from 'prop-types';
import React from 'react';
import Plyr from 'plyr';

export default class Controller extends React.Component {
  componentDidMount() {
    const player = new Plyr('#player');
  }

  render() {
    const {
      audioUrl,
    } = this.props;

    return (
      <audio id="player" controls>
        <source src={audioUrl} type="audio/wav" />
      </audio>
    );
  }
}

Controller.propTypes = {
  audioUrl: PropTypes.string.isRequired,
};
