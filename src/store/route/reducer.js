import {
  SET_ROUTE_DATA_SUCCESS,
  SET_ROUTE_DATA_ERROR,
  INIT_ROUTE_LOADING,
  SET_START_DATE_CHANGE,
  SET_END_DATE_CHANGE,
  INIT_DATE_RESET,
} from '@store/actionTypes';

const initialState = {
  data: [],
  timestampArray: [],
  fetched: false,
  loading: false,
  error: null,
  startIndex: 0,
  endIndex: 0,
  startTime: null,
  endTime: null,
  minTime: null,
  maxTime: null,
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
        startIndex: 0,
        endIndex: action.payload?.length || 0,
        startTime: action.payload?.startTime,
        endTime: action.payload?.endTime,
        minTime: action.payload?.startTime,
        maxTime: action.payload?.endTime,
        timestampArray: action.payload?.timestampArray || [],
      };

    case SET_ROUTE_DATA_ERROR:
      return {
        ...state,
        loading: false,
        fetched: true,
        data: [],
        startTime: null,
        endTime: null,
        minTime: null,
        maxTime: null,
        timestampArray: [],
      };

    case SET_START_DATE_CHANGE:
      return {
        ...state,
        startTime: action.payload?.startTime,
        startIndex: action.payload?.startIndex,
      };
    case SET_END_DATE_CHANGE:
      return {
        ...state,
        endTime: action.payload?.endTime,
        endIndex: action.payload?.endIndex,
      };

    case INIT_DATE_RESET:
      return {
        ...state,
        startIndex: 0,
        endIndex: state.data?.length || 0,
        startTime: state.minTime || null,
        endTime: state.maxTime || null,
      };

    default:
      return state;
  }
};
