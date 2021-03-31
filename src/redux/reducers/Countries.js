import {
  FETCH_COUNTRIES_BEGIN,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_BY_NAME_BEGIN,
  FETCH_COUNTRIES_BY_NAME_FAILURE,
  FETCH_COUNTRIES_BY_NAME_SUCCESS,
  FETCH_COUNTRIES_BY_REGION_FAILURE,
  FETCH_COUNTRIES_BY_REGION_BEGIN,
  FETCH_COUNTRIES_BY_REGION_SUCCESS,
} from "../types/Countries";

const initialState = {
  countries: [],
  error: null,
  loading: false,
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_BEGIN:
      return {
        ...state,
        loading: true,
        countries: [],
        error: null,
      };

    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload,
        error: null,
      };

    case FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        loading: false,
        countries: [],
        error: action.payload,
      };
    case FETCH_COUNTRIES_BY_NAME_BEGIN:
      return {
        ...state,
        loading: true,
        countries: [],
        error: null,
      };
    case FETCH_COUNTRIES_BY_NAME_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload,
        error: null,
      };
    case FETCH_COUNTRIES_BY_NAME_FAILURE:
      return {
        ...state,
        loading: false,
        countries: [],
        error: action.payload,
      };
    case FETCH_COUNTRIES_BY_REGION_BEGIN:
      return {
        ...state,
        loading: true,
        countries: [],
        erro: null,
      };
    case FETCH_COUNTRIES_BY_REGION_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload,
        error: null,
      };
    case FETCH_COUNTRIES_BY_REGION_FAILURE:
      return { ...state, loading: false, countries: [], error: action.payload };
    default:
      return state;
  }
};

export default countriesReducer;
