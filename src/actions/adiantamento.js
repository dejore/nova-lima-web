import * as constants from "./../util/actionTypes";
export const editarAdiantamento = updates => {
  return {
    type: constants.EDITAR_ADIANTAMENTO,
    updates
  };
};
