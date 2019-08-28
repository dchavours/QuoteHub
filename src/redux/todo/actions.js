const actions = {
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
    type: actions.ADD_TODO_REQUEST,
    payload,
  }),
  addToDoSuccess: payload => ({
    type: actions.ADD_TODO_SUCCESS,
    payload,
  }),
  addToDoFail: err => ({
    type: actions.ADD_TODO_FAIL,
    err,
  }),
  fetchToDoRequest: () => ({
    type: actions.FETCH_TODO_REQUEST,
  }),
  fetchToDoSuccess: payload => ({
    type: actions.FETCH_TODO_SUCCESS,
    payload,
  }),
  fetchToDoFail: err => ({
    type: actions.FETCH_TODO_FAIL,
    err,
  }),
  completeToDoRequest: payload => ({
    type: actions.COMPLETE_TODO_REQUEST,
    payload,
  }),
  completeToDoSuccess: () => ({
    type: actions.COMPLETE_TODO_SUCCESS,
  }),
  completeToDoFail: err => ({
    type: actions.COMPLETE_TODO_FAIL,
    err,
  }),
  viewedQueryRequest: payload => ({
    type: actions.VIEWED_QUERY_REQUEST,
    payload,
  }),
  viewedQuerySuccess: payload => ({
    type: actions.VIEWED_QUERY_SUCCESS,
    payload,
  }),
  viewedQueryFail: err => ({
    type: actions.VIEWED_QUERY_SUCCESS,
    err,
  }),
};

export default actions;
