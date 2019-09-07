const modalActions = {
  OPEN_MODAL_REQUEST: 'OPEN_MODAL_REQUEST',
  OPEN_MODAL_SUCCESS: 'OPEN_MODAL_SUCCESS',
  OPEN_MODAL_FAIL: 'OPEN_MODAL_FAIL',
  CLOSE_MODAL_REQUEST: 'CLOSE_MODAL_REQUEST',
  CLOSE_MODAL_SUCCESS: 'CLOSE_MODAL_SUCCESS',
  CLOSE_MODAL_FAIL: 'CLOSE_MODAL_FAIL',

  openModalRequest: payload => ({
    type: modalActions.OPEN_MODAL_REQUEST,
    payload,
  }),
  openModalSuccess: payload => ({
    type: modalActions.OPEN_MODAL_SUCCESS,
    payload,
  }),
  openModalFail: err => ({
    type: modalActions.OPEN_MODAL_FAIL,
    err,
  }),
  closeModalRequest: payload => ({
    type: modalActions.CLOSE_MODAL_REQUEST,
    payload,
  }),
  closeModalSuccess: payload => ({
    type: modalActions.CLOSE_MODAL_SUCCESS,
    payload,
  }),
  closeModalFail: err => ({
    type: modalActions.CLOSE_MODAL_FAIL,
    err,
  }),
};

export default modalActions;
