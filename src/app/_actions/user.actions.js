import { userConstants } from '../Constants/user.constants';
import { userService } from '../Services/user.service';
import { alertActions } from './alert.actions';
import { history } from '../Helpers/history';

export const userActions = {
  login,
  logout,
  getAll
};

function login(email, password) {
  return dispatch => {
    dispatch(request({email}));

    userService.login(email, password)
      .then(
        user => {
          dispatch(success(user));
          history.push('/');
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };

  function request(user) { 
    return { 
      type: userConstants.LOGIN_REQUEST, user } 
  }
  function success(user) { 
    return { 
      type: userConstants.LOGIN_SUCCESS, user } 
  }
  function failure(error) { 
    return { 
      type: userConstants.LOGIN_FAILURE, error } 
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function register(user) {
  return dispatch => {
    dispatch(request(user));

    userService.register(user)
      .then(user => {
        dispatch(success());
        history.push('/login');
        dispatch(alertActions.success('Registration Successful'));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) { 
    return { 
      type: userConstants.REGISTER_REQUEST, user } 
  }
  function success(user) { 
    return { 
      type: userConstants.REGISTER_SUCCESS, user } 
  }
  function failure(error) { 
    return { 
      type: userConstants.REGISTER_FAILURE, error } 
  }
}

function getAll() {
  return dispatch => {
    dispatch(request());

    userService.getAll()
      .then(
        users => dispatch(success(users)),
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };

  function request() { 
    return { 
      type: userConstants.GETALL_REQUEST } 
  }
  function success(users) { 
    return { 
      type: userConstants.GETALL_SUCCESS, users } 
  }
  function failure(error) { 
    return { 
      type: userConstants.GETALL_FAILURE, error } 
  }
}