import {
  INIT_ROUTE_DATA_REQUEST,
  INIT_ROUTE_LOADING,
  SET_ROUTE_DATA_ERROR,
  SET_ROUTE_DATA_SUCCESS,
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
