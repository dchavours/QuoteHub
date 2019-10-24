const authActions = {
    LOGIN_REQUEST:'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAIL: 'LOGIN_FAIL',

    signInRequest: payload => ({
        type: authActions.LOGIN_REQUEST,
        payload
    }),

    signInSuccess: payload => ({
        type: authActions.LOGIN_SUCCESS,
        payload
    }),

    signInFail: payload => ({
        type: authActions.LOGIN_FAIL,
        payload
    }),

}

export default authActions