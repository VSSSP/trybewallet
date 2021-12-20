import React, { Component } from 'react';

export default class TableHeader extends Component {
  render() {
    const headers = ['Descrição',
      'Tag',
      'Método de pagamento',
      'Valor',
      'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Editar/Excluir'];
    return (
      <tr>
        { headers.map((header) => (
          <th key={ header }>{header}</th>
        )) }
      </tr>
    );
  }
}
