const notifActions = {
    NOTIF_SEND_REQUEST: 'NOTIF_SEND_REQUEST',
    NOTIF_SEND_SUCCESS: 'NOTIF_SEND_SUCCESS',
    NOTIF_SEND_FAIL: 'NOTIF_SEND_FAIL',
   
    // Payload should be assigned to getToken()
    // It looks like some types are functions. 


    
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


  };
  
export default notifActions;
  