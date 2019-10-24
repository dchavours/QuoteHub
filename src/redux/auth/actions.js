
const authActions = {
    SIGNIN_REQUEST:'SIGNIN_REQUEST',
    SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
    SIGNIN_FAIL: 'SIGNIN_FAIL',

    signInRequest: payload => ({
        type: authActions.SIGNIN_REQUEST,
        payload
    }),

    signInSuccess: () => ({
        type: authActions.SIGNIN_SUCCESS,
    }),

    signInFail: err => ({
        type: authActions.SIGNIN_FAIL,
        err
    }),

}

export default authActions