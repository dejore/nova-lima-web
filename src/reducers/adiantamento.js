import * as actionType from "./../util/actionTypes";
import { utilObject } from "./../util/util";

export default (state = utilObject.defaultAdiantamentoState, action) => {
  switch (action.type) {
    case actionType.EDITAR_VALOR:
      return {
        ...state,
        ...calcularAdiantamento(action.valor, state.juros, state.qtdParcelas),
        valor: action.valor
      };
    case actionType.EDITAR_QTDPARCELAS:
      return {
        ...state,
        ...calcularAdiantamento(state.valor, state.juros, action.qtdParcelas),
        qtdParcelas: action.qtdParcelas
      };
    case actionType.EDITAR_JUROS:
      return {
        ...state,
        ...calcularAdiantamento(state.valor, action.juros, state.qtdParcelas),
        juros: action.juros
      };
    default:
      return {
        ...state,
        ...calcularAdiantamento(state.valor, state.juros, state.qtdParcelas)
      };
  }
};

let valorFinanciado = 0,
  valorParcela = 0,
  totalJuros = 0;

const calcularAdiantamento = (valor, juros, qtdParcelas) => {
  juros = juros * 0.0001;
  let valorFinanciado = valor * (1 + juros * qtdParcelas);
  let valorParcela = valorFinanciado / (qtdParcelas > 0 ? qtdParcelas : 1);
  let totalJuros = valorFinanciado - valor;
  return {
    valorFinanciado: Math.round(valorFinanciado),
    valorParcela: Math.round(valorParcela),
    totalJuros: Math.round(totalJuros)
  };
};
