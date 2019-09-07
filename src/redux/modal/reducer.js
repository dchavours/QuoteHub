import modalActions from './actions';

const initialState = {
 modalType: false,
 modalProps: {}
};

export default function modal(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case modalActions.OPEN_MODAL_REQUEST:
      return {
        ...state,
       modalType: {
                    ...state,
                    modalType:{               modalType: true,
                                              modalProps: action.modalProps,
                                              error: null,
                    }
                  }
  };


// Moving data throughout the flow chart 
// Make copies of nested data.
// Example I found on the web.
  // Two points for Ravenclaw
  return {
    ...state, // copy the state (level 0)
    school: {
      ...state.school, // copy level 1
      house: {         // replace state.school.house...
        ...state.school.house, // copy existing house properties
        points: state.school.house.points + 2  // change a property
      }
    }
  }






































    case modalActions.OPEN_MODAL_SUCCESS:
      return {
        ...state,
        visible: true,
        error: null,
      };
    case modalActions.OPEN_MODAL_FAIL:
      return {
        ...state,
        visible: false,
        error: payload,
      };
    case modalActions.CLOSE_MODAL_REQUEST:
      return {
        ...state,
        error: null,
      };
    case modalActions.CLOSE_MODAL_SUCCESS:
      return {
        ...state,
        visible: false,
        error: null,
      };
    case modalActions.CLOSE_MODAL_FAIL:
      return {
        ...state,
        visible: false,
        error: payload,
      };
    default:
      return state;
  }
}
