import actions from './actions';

const initialState = {
  fetchingNote: false,
  notes: [],
  error: null

};

export default function notifReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actions.NOTIF_SEND_REQUEST:
      return {
        ...state,
        fetchingNote: true,
        error: null,
      };
    case actions.NOTIF_SEND_SUCCESS:
      return {
        ...state,
        fetchingNote: false,
        notes: payload,
        error: null,
      };
    case actions.NOTIF_SEND_FAIL:
      return {
        ...state,
        fetchingNote: false,
        error: payload,
      };

      case actions.SEND_TOKEN_REQUEST:
        return {
          ...state,
          addLoading: true,
          error: null,
        };
      case actions.SEND_TOKEN_SUCCESS:
        return {
          ...state,
          addLoading: false,
          todos: {
            ...state.todos,
            payload,
          },
          error: null,
        };
      case actions.SEND_TOKEN_FAIL:
        return {
          ...state,
          addLoading: false,
          error: payload,
        };
  
        








    default:
      return state;
  }
}
