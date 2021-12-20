import types from '../types';

const {
  GET_WALLET_API_SUCCESS,
  GET_WALLET_API_FAILED,
  GET_EXPENSES,
  LOGIN_INFO,
  WALLET_INFO,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  SET_NEW_EXPENSE } = types;

export const sendLoginInfo = (payload) => ({
  type: LOGIN_INFO,
  payload,
});

export const sendWalletInfo = (payload) => ({
  type: WALLET_INFO,
  payload,
});

export const walletAPISuccess = (payload) => ({
  type: GET_WALLET_API_SUCCESS,
  payload,
});

export const ERROR = (payload) => ({
  type: GET_WALLET_API_FAILED,
  payload,
});

export const sendExpensesInfo = (payload) => ({
  type: GET_EXPENSES,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

export const editExpense = (payload) => ({
  type: EDIT_EXPENSE,
  payload,
});

export const setNewExpense = (payload) => ({
  type: SET_NEW_EXPENSE,
  payload,
});
