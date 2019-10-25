import { LOGOUT_SUCCESS } from '../auth/reducer';


export const CREATE = 'CREATE';
export const CREATED = 'CREATED';
export const UPDATED = 'UPDATED';
export const REMOVE = 'REMOVE';
export const REMOVED = 'REMOVED';
export const ERROR = 'ERROR';

export const create = item => ({
  type: CREATE,
  payload: { item }
});

export const created = item => ({
  type: CREATED,
  payload: { item }
});

export const updated = item => ({
  type: UPDATED,
  payload: { item }
});

export const remove = item => ({
  type: REMOVE,
  payload: { item }
});

export const removed = item => ({
  type: REMOVED,
  payload: { item }
});

const initialState = [];
const byName = (a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0);

const stuffReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATED:
      return [...state, action.payload.item].sort(byName);
    case UPDATED: {
      const changed = action.payload.item;

      return state
        .map(item => (item.id === changed.id ? changed : item))
        .sort(byName);
    }
    case REMOVED: {
      const removed = action.payload.item;

      return state.filter(item => item.id !== removed.id);
    }
    case LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default stuffReducer;
