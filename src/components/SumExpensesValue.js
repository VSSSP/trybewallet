import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SumExpensesValue extends Component {
  sumExpenses() {
    const { expenses } = this.props;
    return expenses.reduce((acc, curr) => {
      const { ask } = curr.exchangeRates[curr.currency];
      return acc + parseFloat(curr.value * ask);
    }, 0);
  }

  render() {
    return (
      <p data-testid="total-field">
        { this.sumExpenses() }
      </p>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(SumExpensesValue);

SumExpensesValue.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};
