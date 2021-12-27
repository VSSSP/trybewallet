import React from 'react';
import Table from '../components/Table';
import Form from '../components/Form';
import Header from '../components/Header';

export default class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <br/>
        <br/>
        <Form />
        <Table />
      </>
    );
  }
}
