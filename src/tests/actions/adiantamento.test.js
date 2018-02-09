import {
  editarValor,
  editarQtdParcelas,
  editarJuros
} from "./../../actions/adiantamento.js";
import * as constants from "./../../util/actionTypes";

test("edição de valor", () => {
  const action = editarValor(100);
  expect(action).toEqual({
    type: constants.EDITAR_VALOR,
    valor: 100
  });
});

test("edição de qtdParcelas", () => {
  const action = editarQtdParcelas(2);
  expect(action).toEqual({
    type: constants.EDITAR_QTDPARCELAS,
    qtdParcelas: 2
  });
});

test("edição de qtdParcelas", () => {
  const action = editarJuros(2);
  expect(action).toEqual({
    type: constants.EDITAR_JUROS,
    juros: 2
  });
});
