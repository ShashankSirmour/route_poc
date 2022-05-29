import {
  SET_ROUTE_DATA_SUCCESS,
  SET_ROUTE_DATA_ERROR,
  INIT_ROUTE_LOADING,
} from '@store/actionTypes';

const initialState = {
  data: [],
  fetched: false,
  loading: false,
  error: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INIT_ROUTE_LOADING:
      return { ...state, loading: true };
    case SET_ROUTE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        fetched: true,
        data: action.payload?.data || [],
      };

    case SET_ROUTE_DATA_ERROR:
      return {
        ...state,
        loading: false,
        fetched: true,
        data: [],
      };

    default:
      return state;
  }
};
