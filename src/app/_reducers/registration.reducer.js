import { userConstants } from '../Constants';

export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGSTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}