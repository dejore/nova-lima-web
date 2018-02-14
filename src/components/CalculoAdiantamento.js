import React from 'react';
import { connect } from 'react-redux';
import CalculoAdiantamentoForm from './CalculoAdiantamentoForm';
import CalculoResultado from './CalculoResultado';
import {
  editarQtdParcelas,
  editarJuros,
  editarValor
} from './../actions/adiantamento';
class CalculoAdiantamento extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="widget">
          <h1 className="widget-header">CALCULO DE ADIANTAMENTO DE RECURSOS</h1>
          <CalculoAdiantamentoForm
            {...this.props}
            onChangeSliderValor={this.onChangeSliderValor}
            onChangeJuros={this.onChangeJuros}
            onChangeSliderQtdParcelas={this.onChangeSliderQtdParcelas}
          />
          {this.props.adiantamento.valorFinanciado > 0 && (
            <CalculoResultado {...this.props.adiantamento} />
          )}
        </div>
      </div>
    );
  }

  onChangeSliderValor = value => {
    this.props.dispatch(editarValor(parseFloat(value, 10) * 100));
  };
  onChangeJuros = e => {
    const juros = e.target.value;
    this.props.dispatch(editarJuros(parseFloat(juros, 10) * 100));
  };
  onChangeSliderQtdParcelas = value => {
    this.props.dispatch(editarQtdParcelas(parseFloat(value, 10)));
  };
}
const mapStateToProps = state => {
  return {
    adiantamento: state.adiantamento
  };
};
export default connect(mapStateToProps)(CalculoAdiantamento);
