import axios from 'axios';
import querystring from 'querystring';
// import { authLogout } from '../actions';
import { API_URL } from '../constants/api';
import { getActionTypes } from 'redux-axios-middleware';
import { normalize } from 'normalizr';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const apiClients = {
  default: {
    client: axios.create({
      baseURL: API_URL,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json'
      },
      transformResponse: [(data) => {
        return typeof data !== 'object' ? JSON.parse(data) : data;
      }]
    })
  },

  upload: {
    client: axios.create({
      baseURL: API_URL,
      responseType: 'json',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      transformRequest: [(data) => {
        let formData = new FormData();
        for (var e in data) {
          if (data[e] && data[e].name) {
            formData.append(e, data[e], data[e].name);
          }
        }
        return formData;
      }],
      transformResponse: [function (data) {
        return typeof data !== 'object' ? JSON.parse(data) : data;
      }]
    })
  },

  auth: {
    client: axios.create({
      baseURL: API_URL,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json'
      },
      transformRequest: [(data) => {
        return querystring.stringify(data);
      }],
      transformResponse: [function (data) {
        return typeof data !== 'object' ? JSON.parse(data) : data;
      }]
    })
  }
};

export const apiMiddlewareConfig = {
  interceptors: {
      request: [
        function ({getState, dispatch, getSourceAction}, req) {
          // req: contains information about request object
          if (cookies.get('authState') && cookies.get('authState').role) {
            req.headers.role = cookies.get('authState').role;
          }
          return req;
        }
      ]
  },

  onSuccess: ({ action, next, response }, options) => {
    if (action.schema) {
      response.data = normalize(typeof response.data !== 'object' ? JSON.parse(response.data) : response.data, action.schema);
    }
    const nextAction = {
      type: getActionTypes(action, options)[1],
      payload: response,
      meta: {
        previousAction: action
      }
    };
    next(nextAction);
    return nextAction;
  },

  onError: ({ action, next, error, dispatch }, options) => {
    if (error.response && error.response.status === 401) {
      cookies.set('authState', {
        user: {},
      }, {
        path: '/'
      });
      return window.location.reload();
    }

    let errorObject;
    if (!error.response) {
      errorObject = {
        data: error.message,
        status: 0
      };
      if (process.env.NODE_ENV !== 'production') {
        console.log('HTTP Failure in Axios', error);
      }
    } else {
      errorObject = error;
    }
    const nextAction = {
      type: getActionTypes(action, options)[2],
      error: errorObject,
      meta: {
        previousAction: action
      }
    };

    next(nextAction);
    return nextAction;
  }
};
