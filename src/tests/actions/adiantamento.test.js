import { editarAdiantamento } from "./../../actions/adiantamento.js";
import * as constants from "./../../util/actionTypes";

test("edição de valor", () => {
  const action = editarAdiantamento({ valor: 100 });
  expect(action).toEqual({
    type: constants.EDITAR_ADIANTAMENTO,
    updates: {
      valor: 100
    }
  });
});

test("edição de parcela", () => {
  const action = editarAdiantamento({ parcelas: 2 });
  expect(action).toEqual({
    type: constants.EDITAR_ADIANTAMENTO,
    updates: {
      parcelas: 2
    }
  });
});
