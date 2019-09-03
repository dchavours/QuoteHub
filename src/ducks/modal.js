
export const types = {
  INSERT_MODAL: "INSERT_MODAL",
  SHOW_MODAL: "SHOW_MODAL",
  HIDE_MODAL: "HIDE_MODAL",
  REMOVE_MODAL: "REMOVE_MODAL"
};

const initialState = {
  modalType: null,
  modalProps: {}
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_MODAL:
      return {
        ...state,
        modalType: action.modalType,
        modalProps: action.modalProps
      };

    case types.HIDE_MODAL:
      return initialState;

    default:
      return state;
  }
}

export const actions = {
  openModal: modalParams => {
    return {
      type: types.SHOW_MODAL,
      ...modalParams
    };
  },
  closeModal: () => {
    return {
      type: types.HIDE_MODAL
    };
  }
};
