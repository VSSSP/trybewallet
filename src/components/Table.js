import React, { Component } from 'react';
import ExpensesTable from './ExpensesTable';
import TableHeader from './TableHeader';

export default class Table extends Component {
  render() {
    return (
      <div className="col-lg-8 col-md-10 ml-auto mr-auto">
        <div className="table-responsive">
          <table className="table">
            <TableHeader />
            <ExpensesTable />
          </table>
        </div>
      </div>
    );
  }
}
