import * as types from '../constants/actionsType';

export const authLogout = () => (dispatch, getState) => {

    return dispatch({
        types: [ types.API_REQUEST_SEND, types.AUTH_DISCARD_TOKEN, types.AUTH_DISCARD_TOKEN ],

        payload: {
            client: 'auth',
            request: {
                url: `/auth/logout`,
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ` + getState().auth.user.token
                }
            }
        }
    });
};

export const postToken = (login) => (dispatch, getState) => {

    return dispatch({
    types: [ types.API_REQUEST_SEND, types.AUTH_POST_TOKEN, types.API_REQUEST_ERROR ],
    payload: {
        client: 'auth',
        request: {
            url: `/auth/login`,
            method: 'POST',
            headers: {
                'Email': login.email,
                'Password': login.password
            }
        }
    }
    });
};

export const postChangePassword = (oldPassword, newPassword, newPasswordAgain) => (dispatch, getState) => {

    let data = {
        oldPassword,
        newPassword,
        newPasswordAgain
    }

    return dispatch({
        types: [ types.API_REQUEST_SEND, types.AUTH_POST_CHANGE_PASSWORD, types.API_REQUEST_ERROR ],
        payload: {
            request: {
                url: `/auth/changePassword`,
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ` + getState().auth.user.token
                },
                data
            }
        }
    });
};

export const getMe = () => (dispatch, getState) => {

    return dispatch({
        types: [ types.API_REQUEST_SEND, types.AUTH_POST_TOKEN, types.AUTH_DISCARD_TOKEN ],
            payload: {
            client: 'auth',
            request: {
                url: `/auth/me`,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ` + getState().auth.user.token
                }
            }
        }
    });
};
