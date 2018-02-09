import React from "react";
import { connect } from "react-redux";
import CalculoAdiantamentoForm from "./CalculoAdiantamentoForm";
import CalculoResultado from "./CalculoResultado";
import {
  editarQtdParcelas,
  editarJuros,
  editarValor
} from "./../actions/adiantamento";
class CalculoAdiantamento extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>CÁLCULO DE ADIANTAMENTO DE RECURSOS</h1>
        <CalculoAdiantamentoForm
          {...this.props}
          onChangeValor={this.onChangeValor}
          onChangeQtdParcelas={this.onChangeQtdParcelas}
          onChangeJuros={this.onChangeJuros}
        />
        {this.props.adiantamento.valorFinanciado > 0 && (
          <CalculoResultado {...this.props.adiantamento} />
        )}
      </div>
    );
  }
  onChangeValor = e => {
    this.props.dispatch(editarValor(e.target.value));
  };
  onChangeJuros = e => {
    this.props.dispatch(editarJuros(e.target.value));
  };
  onChangeQtdParcelas = e => {
    this.props.dispatch(editarQtdParcelas(e.target.value));
  };
}
const mapStateToProps = state => {
  return {
    adiantamento: state.adiantamento
  };
};
export default connect(mapStateToProps)(CalculoAdiantamento);
