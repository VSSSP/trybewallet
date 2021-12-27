import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SumExpensesValue extends Component {
  sumExpenses() {
    const { expenses } = this.props;
    return expenses.reduce((acc, curr) => {
      const { ask } = curr.exchangeRates[curr.currency];
      let accumulator = acc + parseFloat(curr.value * ask);
      return Math.round(accumulator * 100) / 100;
      // parseFloat(expense.value * ask).toFixed(2)
    }, 0);
  }

  render() {
    return (
      <spam data-testid="total-field">
        R$ { this.sumExpenses() }
      </spam>
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
