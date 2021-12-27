import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SumExpensesValue from './SumExpensesValue';

class Header extends Component {
  render() {
    const { getUserFromStore } = this.props;
    return (
      <div className="fixed-top header">
        <header className="topbar">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="social-network">
                    <li><a className="waves-effect waves-dark" href="https://www.linkedin.com/in/victorssspaula/"><i className="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
        </header>
        <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
          <div className="container">
            <a className="navbar-brand" rel="nofollow" href="http://vsssp.github.io/trybewallet"> TrybeWallet </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse total" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item total">
                  <spam className="nav-link">Total (BRL):{ getUserFromStore }</spam>
                </li>
                <li className="nav-item">
                  <spam className="nav-link">
                    <SumExpensesValue />
                  </spam>
                </li>
              </ul>
            </div>

          </div>
        </nav>
      </div>
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