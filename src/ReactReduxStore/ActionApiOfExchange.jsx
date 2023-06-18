import axios from 'axios';

export const fetchApiExchangeData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(' https://api.coingecko.com/api/v3/exchange_rates');
      dispatch({
        type: 'FETCH_API8_DATA_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_API8_DATA_FAILURE',
        payload: error.message,
      });
    }
  };
};

// ActionApiTwo 