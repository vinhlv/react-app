import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function customFetch(url, options) {
  // return a promise of axios
  let authState = cookies.get('authState');
  if (authState) {
    axios.defaults.headers.common['Authorization'] = 'Bearer '+authState.user.token;
  }

  return axios(url, options).then(response => {
      return response;
    }).catch(error => {
      // if (error.response && error.response.status === 401) {
      //   cookies.set('authState', {
      //     user: {},
      //   }, {
      //     path: '/'
      //   });
      //   window.location.reload();
      // }
      return error;
    });

}
