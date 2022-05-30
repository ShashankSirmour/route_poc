import {
  INIT_START_DATE_CHANGE,
  INIT_ROUTE_DATA_REQUEST,
  INIT_ROUTE_LOADING,
  SET_END_DATE_CHANGE,
  SET_ROUTE_DATA_ERROR,
  SET_ROUTE_DATA_SUCCESS,
  SET_START_DATE_CHANGE,
  INIT_END_DATE_CHANGE,
  INIT_DATE_RESET,
} from '@store/actionTypes';

export const fetchRouteData = () => ({
  type: INIT_ROUTE_DATA_REQUEST,
});

export const fetchRouteSuccess = (data) => ({
  type: SET_ROUTE_DATA_SUCCESS,
  payload: data,
});

export const fetchRouteError = () => ({
  type: SET_ROUTE_DATA_ERROR,
});

export const setRouteLoading = () => ({
  type: INIT_ROUTE_LOADING,
});

export const initStartDateChange = (date) => ({
  type: INIT_START_DATE_CHANGE,
  date,
});

export const initEndDateChange = (date) => ({
  type: INIT_END_DATE_CHANGE,
  date,
});

export const setStartDateChange = (data) => ({
  type: SET_START_DATE_CHANGE,
  payload: data,
});

export const setEndDateChange = (data) => ({
  type: SET_END_DATE_CHANGE,
  payload: data,
});

export const initDateReset = () => ({
  type: INIT_DATE_RESET,
});
