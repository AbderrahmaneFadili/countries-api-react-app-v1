import {
  FETCH_COUNTRIES_BEGIN,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_BY_NAME_BEGIN,
  FETCH_COUNTRIES_BY_NAME_SUCCESS,
  FETCH_COUNTRIES_BY_NAME_FAILURE,
  FETCH_COUNTRIES_BY_REGION_BEGIN,
  FETCH_COUNTRIES_BY_REGION_FAILURE,
  FETCH_COUNTRIES_BY_REGION_SUCCESS,
} from "../types/Countries";

//fetch all Countries Begin
export const fetchCountriesBegin = () => ({
  type: FETCH_COUNTRIES_BEGIN,
});

//fetch all Countries Success
export const fetchCountriesSuccess = (payload) => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload,
});

//fetch all Countries Failure
export const fetchCountriesFailure = (payload) => ({
  type: FETCH_COUNTRIES_FAILURE,
  payload,
});

//fetch all countries

export const fetchCountries = () => (dispatch) => {
  dispatch(fetchCountriesBegin());
  fetch(`https://restcountries.eu/rest/v2/all`)
    .then((res) => res.json())
    .then((value) => dispatch(fetchCountriesSuccess(value)))
    .catch((error) => dispatch(fetchCountriesFailure(error)));
};

//fetch countries by name begin
export const fetchByNameBegin = () => ({
  type: FETCH_COUNTRIES_BY_NAME_BEGIN,
});

//fetch countries by name begin
export const fetchByNameSuccess = (payload) => ({
  type: FETCH_COUNTRIES_BY_NAME_SUCCESS,
  payload,
});

//fetch countries by name begin
export const fetchByNameFailure = (payload) => ({
  type: FETCH_COUNTRIES_BY_NAME_FAILURE,
  payload,
});

//fetch by name
export const fetchByName = (name) => (dispatch) => {
  dispatch(fetchByNameBegin());
  fetch(`
https://restcountries.eu/rest/v2/name/${name}`)
    .then((res) => res.json())
    .then((value) => dispatch(fetchByNameSuccess(value)))
    .catch((error) => dispatch(fetchByNameFailure(error)));
};

//fetch countries by region begin
export const fetchCountriesByRegionBegin = () => ({
  type: FETCH_COUNTRIES_BY_REGION_BEGIN,
});

//fetch countries by region success
export const fetchCountriesByRegionSuccess = (payload) => ({
  type: FETCH_COUNTRIES_BY_REGION_SUCCESS,
  payload,
});

//fetch countries by region failure
export const fetchCountriesByRegionFailure = (payload) => ({
  type: FETCH_COUNTRIES_BY_REGION_FAILURE,
  payload,
});

//fetch countries by region
export const fetchCountriesByRegion = (region) => (dispatch) => {
  console.log(`https://restcountries.eu/rest/v2/region/${region}`);
  dispatch(fetchCountriesByRegionBegin());
  fetch(`https://restcountries.eu/rest/v2/region/${region}`)
    .then((resp) => resp.json())
    .then((value) => dispatch(fetchCountriesByRegionSuccess(value)))
    .catch((error) => dispatch(fetchCountriesByRegionFailure(error)));
};
