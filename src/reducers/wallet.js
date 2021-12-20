import types from '../types';

const {
  GET_WALLET_API_SUCCESS,
  GET_EXPENSES,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  SET_NEW_EXPENSE } = types;

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
  editing: false,
  selectedId: null,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_WALLET_API_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  case GET_EXPENSES:
    action.payload = { id: state.expenses.length, ...action.payload };
    state.expenses = [...state.expenses, action.payload];
    return { ...state };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      editing: true,
      selectedId: action.payload,
    };
  case SET_NEW_EXPENSE:
    action.payload = { id: state.selectedId, ...action.payload };
    return {
      ...state,
      expenses: state.expenses.reduce((acc, current) => {
        if (current.id === state.selectedId) return [...acc, action.payload];
        return [...acc, current];
      }, []),
      editing: false,
    };
  default:
    return state;
  }
};

export default walletReducer;
