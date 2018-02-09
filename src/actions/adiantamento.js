import * as constants from "./../util/actionTypes";

export const editarValor = valor => ({
  type: constants.EDITAR_VALOR,
  valor
});
export const editarQtdParcelas = qtdParcelas => ({
  type: constants.EDITAR_QTDPARCELAS,
  qtdParcelas
});
export const editarJuros = juros => ({
  type: constants.EDITAR_JUROS,
  juros
});
