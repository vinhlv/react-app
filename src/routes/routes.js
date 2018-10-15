import {
  Home
} from '../components/home';

import { Login } from '../components/auth';
import App from '../containers/App';
import NotFound from '../containers/NotFound';


const routes = [
  {
    component: App,
    routes: [
      {
        component: Login,
        path: '/login'
      },
      {
        component: Home,
        exact: true,
        path: '/'
      },
      {
        component: NotFound
      }
    ]
  }
];

export default routes;
