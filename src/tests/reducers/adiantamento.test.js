import adiantamentoReducer from "./../../reducers/adiantamento";
import { utilObject } from "./../../util/util";
import * as actionType from "./../../util/actionTypes";

test("Recuder Retorna default state", () => {
  const state = adiantamentoReducer(undefined, utilObject.defaultReducerAction);
  expect(state).toEqual(utilObject.defaultAdiantamentoState);
});

test("edita valor default", () => {
  const editAction = {
    type: actionType.EDITAR_VALOR,
    valor: 0
  };
  const state = adiantamentoReducer(undefined, editAction);
  expect(state).toEqual(utilObject.defaultAdiantamentoState);
});

test("edita qtdParcelas default", () => {
  const editAction = {
    type: actionType.EDITAR_QTDPARCELAS,
    qtdParcelas: 1
  };
  const state = adiantamentoReducer(undefined, editAction);
  expect(state).toEqual(utilObject.defaultAdiantamentoState);
});

test("edita juros default", () => {
  const editAction = {
    type: actionType.EDITAR_JUROS,
    juros: 200
  };
  const state = adiantamentoReducer(undefined, editAction);
  expect(state).toEqual(utilObject.defaultAdiantamentoState);
});

test("edita juros 2.34", () => {
  const editAction = {
    type: actionType.EDITAR_JUROS,
    juros: 234
  };
  const state = adiantamentoReducer(undefined, editAction);
  expect(state).toEqual({ ...utilObject.defaultAdiantamentoState, juros: 234 });
});

test("edita valor calcula Financiado", () => {
  const editAction = {
    type: actionType.EDITAR_VALOR,
    valor: 1000
  };
  const state = adiantamentoReducer(undefined, editAction);
  expect(state).toEqual({
    ...utilObject.defaultAdiantamentoState,
    valor: 1000,
    valorParcela: 1020,
    valorFinanciado: 1020,
    totalJuros: 20
  });
});

test("Calcula 1", () => {
  const defaultState = {
    ...utilObject.defaultAdiantamentoState,
    valor: 2000,
    qtdParcelas: 2
  };
  const state = adiantamentoReducer(
    defaultState,
    utilObject.defaultReducerAction
  );
  expect(state).toEqual({
    ...utilObject.defaultAdiantamentoState,
    valor: 2000,
    qtdParcelas: 2,
    valorParcela: 1040,
    valorFinanciado: 2080,
    totalJuros: 80
  });
});

test("Calcula 2", () => {
  const defaultState = {
    ...utilObject.defaultAdiantamentoState,
    valor: 200135,
    qtdParcelas: 3,
    juros: 1000
  };
  const state = adiantamentoReducer(
    defaultState,
    utilObject.defaultReducerAction
  );
  expect(state).toEqual({
    ...utilObject.defaultAdiantamentoState,
    valor: 200135,
    qtdParcelas: 3,
    juros: 1000,
    valorParcela: 86725,
    valorFinanciado: 260176,
    totalJuros: 60041
  });
});
