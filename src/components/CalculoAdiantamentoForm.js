import React from "react";

const CalculoAdiantamentoForm = props => (
  <div>
    <form>
      <label>Valor do Adiantamento</label>
      <input
        type="text"
        autoFocus
        value={props.adiantamento.valor}
        onChange={props.onChangeValor}
      />
      <label>Número de Parcelas</label>
      <input
        type="text"
        value={props.adiantamento.qtdParcelas}
        onChange={props.onChangeQtdParcelas}
      />
      <label>Juros Utilizado</label>
      <input
        type="text"
        value={props.adiantamento.juros}
        onChange={props.onChangeJuros}
      />
    </form>
  </div>
);
export default CalculoAdiantamentoForm;
