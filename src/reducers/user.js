import types from '../types';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case types.LOGIN_INFO:
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.senha,
    };
  default:
    return state;
  }
};

export default loginReducer;
