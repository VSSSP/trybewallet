import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { sendLoginInfo } from '../actions';
import wallet from '../images/wallet.png';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  enableButton() {
    const { senha } = this.state;
    const MIN_LENGTH = 6;
    if (senha.length < MIN_LENGTH) return true;
    if (!this.emailValidation()) return true;
    return false;
  }

  emailValidation() {
    const { email } = this.state;
    const emailCheck = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    // Validação de email retirada de:
    // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    return emailCheck.test(email);
  }

  handleClick() {
    const { setLoginToStore } = this.props;
    setLoginToStore(this.state);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { email, senha, redirect } = this.state;
    if (redirect) return <Redirect to="/carteira" />;
    return (
      <div class="wrapper fadeInDown">
        <div id="formContent">

          <div class="fadeIn first">
            <img src={ wallet } id="icon" alt="User Icon" />
          </div>

          <form>
          <input
            type="email"
            name="email"
            value={ email }
            placeholder="e-mail"
            data-testid="email-input"
            onChange={ this.handleChange }
            className="fadeIn second login-input"
          />
          <input
            type="password"
            name="senha"
            value={ senha }
            placeholder="senha"
            data-testid="password-input"
            onChange={ this.handleChange }
            className="fadeIn third login-input"
          />
          <button
            disabled={ this.enableButton() }
            type="button"
            onClick={ this.handleClick }
            className="fadeIn fourth login-button"
          >
            Entrar
          </button>
          </form>

        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setLoginToStore: (value) => dispatch(sendLoginInfo(value)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  setLoginToStore: PropTypes.func.isRequired,
};

{/* <div>
<input
  type="email"
  name="email"
  value={ email }
  placeholder="e-mail"
  data-testid="email-input"
  onChange={ this.handleChange }
/>
<input
  type="password"
  name="senha"
  value={ senha }
  placeholder="senha"
  data-testid="password-input"
  onChange={ this.handleChange }
/>
<button
  disabled={ this.enableButton() }
  type="button"
  onClick={ this.handleClick }
>
  Entrar
</button>
</div> */}