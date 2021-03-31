import {
  FETCH_COUNTRIES_BEGIN,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_BY_NAME_BEGIN,
  FETCH_COUNTRIES_BY_NAME_FAILURE,
  FETCH_COUNTRIES_BY_NAME_SUCCESS,
} from "../types/Countries";

const initialState = {
  countries: [],
  errro: null,
  loading: false,
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_BEGIN:
      return {
        ...state,
        loading: true,
        countries: [],
        errro: null,
      };

    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload,
        errro: null,
      };

    case FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        loading: false,
        countries: [],
        errro: action.payload,
      };
    case FETCH_COUNTRIES_BY_NAME_BEGIN:
      return {
        ...state,
        loading: true,
        countries: [],
        errro: null,
      };
    case FETCH_COUNTRIES_BY_NAME_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload,
        errro: null,
      };
    case FETCH_COUNTRIES_BY_NAME_FAILURE:
      return {
        ...state,
        loading: false,
        countries: [],
        errro: action.payload,
      };
    default:
      return state;
  }
};

export default countriesReducer;
