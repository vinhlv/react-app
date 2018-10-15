import * as types from '../constants/actionsType';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
let initialState = cookies.get('authState') ? cookies.get('authState') : {
    user: {}
};

export default function auth(state = initialState, action) {
    let authState = state;

    switch (action.type) {
        case types.AUTH_POST_TOKEN:
            authState = {
                user: {
                    changedPassword: action.payload.data.changedPassword,
                    token: action.payload.data.token,
                    fullName: action.payload.data.fullName,
                    userId: action.payload.data.userId,
                    email: action.payload.data.email,
                    companyId: action.payload.data.companyId,
                    role: {
                        power: action.payload.data.role.power,
                        roleType: action.payload.data.role.roleType,
                        roleId: action.payload.data.role.roleId
                    }
                }
            };
        break;

        case types.AUTH_DISCARD_TOKEN:
            authState = {
                user: {}
            };
        break;

        default:
            authState = state;
        }

    cookies.set('authState', {
        user: authState.user,
    }, {
        path: '/'
    });

    return authState;
};
