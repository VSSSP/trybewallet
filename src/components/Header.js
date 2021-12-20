import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SumExpensesValue from './SumExpensesValue';

class Header extends Component {
  render() {
    const { getUserFromStore } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          { getUserFromStore }
        </p>
        <SumExpensesValue />
        <p data-testid="header-currency-field">
          BRL
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  getUserFromStore: state.user.email,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  getUserFromStore: PropTypes.string.isRequired,
};
