import axios from 'axios';

export const fetchApi2Data = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(' https://api.coingecko.com/api/v3/simple/supported_vs_currencies');
      dispatch({
        type: 'FETCH_API2_DATA_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_API2_DATA_FAILURE',
        payload: error.message,
      });
    }
  };
};

// ActionApiTwo 