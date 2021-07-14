import { Middleware } from 'redux';

import * as userConstants from 'redux/constants/user.constants';
import * as appConstants from 'redux/constants/app.constants';
import history from 'helpers/history';
import { getCookie } from 'helpers/cookies';

const redirectMiddleware: Middleware = () => (next) => (action) => {
  const { type } = action;
  switch (type) {
    case userConstants.USER_ON_CONFIRM_ACCOUNT_SUCCEEDED:
    case userConstants.USER_ON_LOGIN_SUCCEEDED:
      setTimeout(() => history.push('/profile'), 0);
      break;
    case userConstants.USER_ON_FORGOT_PASSWORD_SUCCEEDED:
    case userConstants.USER_ON_RESET_PASSWORD_SUCCEEDED:
    case appConstants.APP_ON_INITIALIZE_PRIVATE_ROUTE_FAILED:
      history.push('/login');
      break;
    case appConstants.APP_ON_INITIALIZE_PUBLIC_ROUTE_SUCCEDED:
      if (action.restricted && action.user) {
        history.push({
          pathname: '/profile',
        });
      }
      break;
    case appConstants.APP_ON_INITIALIZE_PUBLIC_ROUTE_FAILED:
      if (action.error.statusCode === 401) {
        history.go(0);
      }
      break;
    case appConstants.APP_ON_INITIALIZE_PRIVATE_ROUTE_REQUESTED:
      if (!getCookie('accessToken')) {
        history.push('/login');
        break;
      }
      break;
    case userConstants.USER_ON_CONFIRM_ACCOUNT_FAILED:
    case userConstants.USER_ON_LOGOUT_SUCCEEDED:
      history.push('/home');
      break;
    default:
      break;
  }
  return next(action);
};

export default redirectMiddleware;
