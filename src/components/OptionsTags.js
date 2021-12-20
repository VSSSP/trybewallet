import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class OptionsTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <>
        { tags.map((tag) => (
          <option
            key={ tag }
          >
            { tag }
          </option>
        )) }
      </>
    );
  }
}

OptionsTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.any).isRequired,
};
