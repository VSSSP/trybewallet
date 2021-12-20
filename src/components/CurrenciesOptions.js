import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCurrencies from '../services/walletAPI';

class CurrenciesOptions extends Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <>
        { currencies.map((currencie) => (
          <option
            key={ currencie }
          >
            { currencie }
          </option>))}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrenciesOptions);

CurrenciesOptions.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};
