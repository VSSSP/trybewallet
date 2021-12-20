import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OptionsTags from './OptionsTags';
import PayOptions from './PayOptions';
import CurrenciesOptions from './CurrenciesOptions';
import { sendExpensesInfo, setNewExpense } from '../actions';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEditExpenseButton = this.handleEditExpenseButton.bind(this);
  }

  async handleClick() {
    const { sendExpensesToStore } = this.props;
    const api = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await api.json();
    this.setState({
      exchangeRates,
    });
    sendExpensesToStore(this.state);
  }

  handleEditExpenseButton() {
    const { sendEditedExpenseToStore, expenses, selectedId } = this.props;
    sendEditedExpenseToStore(this.state);
    sendEditedExpenseToStore({
      ...this.state,
      exchangeRates: expenses[selectedId].exchangeRates,
    });
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  addExpenseButton() {
    return (
      <button type="button" onClick={ this.handleClick }>
        Adicionar despesa
      </button>
    );
  }

  editExpenseButton() {
    return (
      <button type="button" onClick={ this.handleEditExpenseButton }>
        Editar despesa
      </button>
    );
  }

  render() {
    const payMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { editing } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" name="value" id="valor" onChange={ this.handleChange } />
        </label>

        <label htmlFor="descricao">
          Descrição:
          <textarea name="description" id="descricao" onChange={ this.handleChange } />
        </label>

        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" onChange={ this.handleChange } name="currency">
            <CurrenciesOptions />
          </select>
        </label>

        <label htmlFor="método de pagamento">
          Método de pagamento:
          <select id="método de pagamento" onChange={ this.handleChange } name="method">
            <PayOptions payMethods={ payMethods } />
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select id="tag" onChange={ this.handleChange } name="tag">
            <OptionsTags tags={ tags } />
          </select>
        </label>
        { editing ? this.editExpenseButton() : this.addExpenseButton() }

      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  editing: state.wallet.editing,
  expenses: state.wallet.expenses,
  selectedId: state.wallet.selectedId,
});

const mapDispatchToProps = (dispatch) => ({
  sendExpensesToStore: (value) => dispatch(sendExpensesInfo(value)),
  sendEditedExpenseToStore: (value) => dispatch(setNewExpense(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  sendExpensesToStore: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
  sendEditedExpenseToStore: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedId: PropTypes.number.isRequired,
};
