const notifActions = {
    NOTIF_SEND_REQUEST: 'NOTIF_SEND_REQUEST',
    NOTIF_SEND_SUCCESS: 'NOTIF_SEND_SUCCESS',
    NOTIF_SEND_FAIL: 'NOTIF_SEND_FAIL',
    SEND_TOKEN_REQUEST: 'SEND_TOKEN_REQUEST',
    SEND_TOKEN_SUCCESS: 'SEND_TOKEN_SUCCESS',
    SEND_TOKEN_FAIL: 'SEND_TOKEN_FAIL',

   
    // Payload should be assigned to getToken()
    // It looks like some types are functions. 
    
    // ToDo: Change the naming scheme of notifSendRequest to notifLogRequest.
    notifSendRequest: () =>({
        type: notifActions.NOTIF_SEND_REQUEST,
    }),

    notifSendSuccess: payload => ({
      type: notifActions.NOTIF_SEND_SUCCESS,
      payload,
    }),

    notifSendFail: err => ({
      type: notifActions.NOTIF_SEND_FAIL,
      err,
    }),

    sendTokenToDBRequest: payload => ({
      type: notifActions.SEND_TOKEN_REQUEST,
      payload,
    }),

    sendTokenToDBSuccess: payload => ({
      type: notifActions.SEND_TOKEN_SUCCESS,
      payload,
    }),

    sendTokenToDBFail: err => ({
      type: notifActions.SEND_TOKEN_FAIL,
      err,
    }),
  };
  
export default notifActions;
