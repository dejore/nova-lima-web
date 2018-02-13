import React from 'react';
import Slider from 'react-rangeslider';

const CalculoAdiantamentoForm = props => (
  <form className="widget-form">
    <div className="widget-form-item">
      <label className="widget-form-item-label">
        Valor do Adiantamento: R${(props.adiantamento.valor / 100)
          .toFixed(2)
          .toString()
          .replace('.', ',')}
      </label>
      <div className="slider">
        <Slider
          min={0}
          max={5000}
          value={parseFloat(props.adiantamento.valor, 10) / 100}
          onChange={props.onChangeSliderValor}
        />
      </div>
    </div>
    <div className="widget-form-item">
      <label className="widget-form-item-label">
        Parcelas: {props.adiantamento.qtdParcelas} vezes
      </label>
      <div className="slider">
        <Slider
          min={1}
          max={60}
          value={props.adiantamento.qtdParcelas}
          onChange={props.onChangeSliderQtdParcelas}
        />
      </div>
    </div>
    <div className="widget-form-item">
      <label className="widget-form-item-label">
        Juros Utilizado{' '}
        {(props.adiantamento.juros / 100)
          .toFixed(2)
          .toString()
          .replace('.', ',')}%
      </label>
    </div>
  </form>
);
export default CalculoAdiantamentoForm;
