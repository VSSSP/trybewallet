import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PayOptions extends Component {
  render() {
    const { payMethods } = this.props;
    return (
      <>
        { payMethods.map((payMethod) => (
          <option
            key={ payMethod }
          >
            { payMethod }
          </option>
        )) }
      </>
    );
  }
}

PayOptions.propTypes = {
  payMethods: PropTypes.arrayOf(PropTypes.any).isRequired,
};
