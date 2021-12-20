import React, { Component } from 'react';
import ExpensesTable from './ExpensesTable';
import TableHeader from './TableHeader';

export default class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <ExpensesTable />
      </table>
    );
  }
}
