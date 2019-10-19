const notifActions = {
    NOTIF_SEND_REQUEST: 'NOTIF_SEND_REQUEST',
    NOTIF_SEND_SUCCESS: 'NOTIF_SEND_SUCCESS',
    NOTIF_SEND_FAIL: 'NOTIF_SEND_FAIL',
   
    // Payload should be assigned to getToken()
    notifSendRequest: payload =>({
        type: notifActions.NOTIF_SEND_REQUEST,
        payload,
    }),

    notifSendSuccess: payload => ({
      type: notifActions.NOTIF_SEND_SUCCESS,
      payload,
    }),

    notifSendFail: payload => ({
      type: notifActions.NOTIF_SEND_FAIL,
      payload,
    }),


  };
  
export default notifActions;
  