const notifActions = {
    NOTIF_SEND_REQUEST: 'FETCH_TODO_REQUEST',
    NOTIF_SEND_SUCCESS: 'FETCH_TODO_SUCCESS',
    NOTIF_SEND_FAIL: 'FETCH_TODO_FAIL',
   
    // Payload should be assigned to getToken()
    notifSendRequest: payload =>({
        type: notifActions.NOTIF_SEND_REQUEST,
        payload,
    }),

    notifSendSuccess: payload => ({
      type: notifActions.NOTIF_SEND_REQUEST,
      payload,
    }),

    notifSendFail: payload => ({
      type: notifActions.NOTIF_SEND_SUCCESS,
      payload,
    }),


  };
  
export default notifActions;
  