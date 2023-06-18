const initialState = {
  api1Data: [],
  api2Data: [],
  api3Data: [],
  api4Data: [],
  api5Data: [],
  api6Data: [],
  api7Data: [],
  api8Data: [],
    error: null
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_API1_DATA_SUCCESS':
      return {
        ...state,
        api1Data: action.payload,
        error: null,
      };
    case 'FETCH_API1_DATA_FAILURE':
      return {
        ...state,
        api1Data: [],
        error: action.payload,
      };
    case 'FETCH_API2_DATA_SUCCESS':
      return {
        ...state,
        api2Data: action.payload,
        error: null,
      };
    case 'FETCH_API2_DATA_FAILURE':
      return {
        ...state,
        api2Data: [],
        error: action.payload,
      };
    case 'FETCH_API3_DATA_SUCCESS':
      return {
        ...state,
        api3Data: action.payload,
        error: null,
      };
    case 'FETCH_API3_DATA_FAILURE':
      return {
        ...state,
        api3Data: [],
        error: action.payload,
      };
    case 'FETCH_API4_DATA_SUCCESS':
      return {
        ...state,
        api4Data: action.payload,
        error: null,
      };
    case 'FETCH_API4_DATA_FAILURE':
      return {
        ...state,
        api4Data: [],
        error: action.payload,
      };
    case 'FETCH_API5_DATA_SUCCESS':
      return {
        ...state,
        api5Data: action.payload,
        error: null,
      };
    case 'FETCH_API5_DATA_FAILURE':
      return {
        ...state,
        api5Data: [],
        error: action.payload,
      };
    case 'FETCH_API6_DATA_SUCCESS':
      return {
        ...state,
        api6Data: action.payload,
        error: null,
      };
    case 'FETCH_API6_DATA_FAILURE':
      return {
        ...state,
        api6Data: [],
        error: action.payload,
      };
    case 'FETCH_API7_DATA_SUCCESS':
      return {
        ...state,
        api7Data: action.payload,
        error: null,
      };
    case 'FETCH_API7_DATA_FAILURE':
      return {
        ...state,
        api7Data: [],
        error: action.payload,
      };
      case 'FETCH_API8_DATA_SUCCESS':
      return {
        ...state,
        api8Data: action.payload,
        error: null,
      };
    case 'FETCH_API8_DATA_FAILURE':
      return {
        ...state,
        api8Data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
