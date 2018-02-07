import * as actionType from "./../util/actionTypes";
import { utilObject } from "./../util/util";

export default (state = utilObject.defaultAdiantamentoState, action) => {
  switch (action.type) {
    case actionType.EDITAR_ADIANTAMENTO:
      return { adiantamento: { ...state.adiantamento, ...action.updates } };
    default:
      return state;
  }
};
