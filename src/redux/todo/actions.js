const listActions = {
  FETCH_TODO_REQUEST: 'FETCH_TODO_REQUEST',
  FETCH_TODO_SUCCESS: 'FETCH_TODO_SUCCESS',
  FETCH_TODO_FAIL: 'FETCH_TODO_FAIL',
  VIEWED_QUERY_REQUEST: 'VIEWED_QUERY_REQUEST',
  VIEWED_QUERY_SUCCESS: 'VIEWED_QUERY_SUCCESS',
  VIEWED_QUERY_FAIL: 'VIEWED_QUERY_FAIL',
  ADD_TODO_REQUEST: 'ADD_TODO_REQUEST',
  ADD_TODO_SUCCESS: 'ADD_TODO_SUCCESS',
  ADD_TODO_FAIL: 'ADD_TODO_FAIL',
  COMPLETE_TODO_REQUEST: 'COMPLETE_TODO_REQUST',
  COMPLETE_TODO_SUCCESS: 'COMPLETE_TODO_SUCCESS',
  COMPLETE_TODO_FAIL: 'COMPLETE_TODO_FAIL',

  addToDoRequest: payload => ({
    type: listActions.ADD_TODO_REQUEST,
    payload,
  }),
  addToDoSuccess: payload => ({
    type: listActions.ADD_TODO_SUCCESS,
    payload,
  }),
  addToDoFail: err => ({
    type: listActions.ADD_TODO_FAIL,
    err,
  }),
  fetchToDoRequest: () => ({
    type: listActions.FETCH_TODO_REQUEST,
  }),
  fetchToDoSuccess: payload => ({
    type: listActions.FETCH_TODO_SUCCESS,
    payload,
  }),
  fetchToDoFail: err => ({
    type: listActions.FETCH_TODO_FAIL,
    err,
  }),
  completeToDoRequest: payload => ({
    type: listActions.COMPLETE_TODO_REQUEST,
    payload,
  }),
  completeToDoSuccess: () => ({
    type: listActions.COMPLETE_TODO_SUCCESS,
  }),
  completeToDoFail: err => ({
    type: listActions.COMPLETE_TODO_FAIL,
    err,
  }),
  viewedQueryRequest: payload => ({
    type: listActions.VIEWED_QUERY_REQUEST,
    payload,
  }),
  viewedQuerySuccess: payload => ({
    type: listActions.VIEWED_QUERY_SUCCESS,
    payload,
  }),
  viewedQueryFail: err => ({
    type: listActions.VIEWED_QUERY_SUCCESS,
    err,
  }),
};

export default listActions;
