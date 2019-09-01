import actions from './actions';

const initialState = {
 modal: false
};

export default function todoReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actions.OPEN_MODAL_REQUEST:
      return {
        ...state,
        error: null,
      };
    case actions.OPEN_MODAL_SUCCESS:
      return {
        ...state,
        visible: true,
        error: null,
      };
    case actions.OPEN_MODAL_FAIL:
      return {
        ...state,
        visible: false,
        error: payload,
      };
    case actions.CLOSE_MODAL_REQUEST:
      return {
        ...state,
        error: null,
      };
    case actions.CLOSE_MODAL_SUCCESS:
      return {
        ...state,
        visible: false,
        error: null,
      };
    case actions.CLOSE_MODAL_FAIL:
      return {
        ...state,
        visible: false,
        error: payload,
      };
    default:
      return state;
  }
}
