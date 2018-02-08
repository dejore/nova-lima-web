import React from 'react';
import { utilObject } from './../util/util';
export default class AdiantamentoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...utilObject.defaultAdiantamentoState
    };
  }
  render() {
    return (
      <div>
        <h1>CÁLCULO DE ADIANTAMENTO DE RECURSOS</h1>
        <form>
          <input type="text" placeholder="Valor do Adiantamento" />
          <input type="text" placeholder="Número de Parcelas" />
          <input type="text" placeholder="Juros Utilizado" />
        </form>
      </div>
    );
  }
}
