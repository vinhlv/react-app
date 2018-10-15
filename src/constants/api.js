let API_URL = '';

switch (process.env.REACT_APP_BUILD_ENV) {
    case 'LIVE':
        API_URL = '';
        break;

    case 'STAGING':
        API_URL = '';
        break;

    case 'DEVELOP':
        API_URL = '';
        break;

    case 'TEST':
        API_URL = '';
        break;

    default:
}

export {
  API_URL
}
