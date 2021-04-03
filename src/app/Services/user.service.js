import { apiUrl } from '../Constants/constants';
import { authHeader } from '../Helpers/auth-header';

export const userService = {
  login,
  logout,
  register,
  getAll,
};


function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  };

  return fetch(`${apiUrl}AuthManagement/login`, requestOptions)
              .then(handleResponse)
              .then(user => {
                localStorage.setItem('user', JSON.stringify(user));
                return user;
              })
}

function logout() {
  localStorage.removeItem('user');
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  };

  return fetch(`${apiUrl}authmanagement/register`, requestOptions.then(handleResponse));
}


function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${apiUrl}/api`, requestOptions).then(handleResponse);
}


function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if(!response.ok) {
      if(response.status === 401) {
        logout();
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}