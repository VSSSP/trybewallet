import React from 'react';
import Table from '../components/Table';
import Form from '../components/Form';
import Header from '../components/Header';

export default class Wallet extends React.Component {
  render() {
    return (
      <>
        <h3 className="info">Momentaneamente indisponível para smartphones e telas pequenas</h3>
        <div className="all">
        <Header />
        <br/>
        <br/>
        <Form />
        <Table />
        </div>
      </>
    );
  }
}
