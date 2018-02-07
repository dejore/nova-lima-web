import adiantamentoReducer from "./../../reducers/adiantamento";
import { utilObject } from "./../../util/util";
import * as actionType from "./../../util/actionTypes";
test("Recuder Retorna default state", () => {
  const state = adiantamentoReducer(undefined, utilObject.defaultReducerAction);
  expect(state).toEqual(utilObject.defaultAdiantamentoState);
});

test("edita valor", () => {
  const editAction = {
    type: actionType.EDITAR_ADIANTAMENTO,
    updates: { valor: 0 }
  };
  const state = adiantamentoReducer(undefined, editAction);
  expect(state).toEqual(utilObject.defaultAdiantamentoState);
});

test("edita parcela", () => {
  const editAction = {
    type: actionType.EDITAR_ADIANTAMENTO,
    updates: { parcela: 0 }
  };
  const state = adiantamentoReducer(undefined, editAction);
  expect(state).toEqual(utilObject.defaultAdiantamentoState);
});
