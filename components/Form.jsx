import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
  render() {
    const {
      submitUrl,
      data,
      assignmentId,
    } = this.props;

    return (
      <form
        action={submitUrl}
        method="POST"
        target="_top"
      >
        <input
          type="hidden"
          name="data"
          value={data}
        />
        <input
          type="hidden"
          name="assignmentId"
          value={assignmentId}
        />
        <button
          className="button"
          type="submit"
          value="Submit"
        >
          Submit
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  submitUrl: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  assignmentId: PropTypes.string.isRequired,
};
