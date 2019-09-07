





























// SHOW_MODAL

export const types = {
    INSERT_MODAL: "INSERT_MODAL",
    OPEN_MODAL_REQUEST: "OPEN_MODAL_REQUEST",
    HIDE_MODAL: "HIDE_MODAL",
    REMOVE_MODAL: "REMOVE_MODAL"
  };
  
  const initialState = {
    modalType: false,
    modalProps: {}
  };
  
  export default function modal(state = initialState, action) {
    switch (action.type) {
      case types.OPEN_MODAL_REQUEST:
        return {
          ...state,
          modalType: true,
          // PayLoad
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
        type: types.OPEN_MODAL_REQUEST,
        ...modalParams
      };
    },
    closeModal: () => {
      return {
        type: types.HIDE_MODAL
      };
    }
  };
  