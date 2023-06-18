import axios from 'axios';

export const fetchApi3Data = ({name,currency,day}) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=${currency}&days=${day}`);
      dispatch({
        type: 'FETCH_API3_DATA_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_API3_DATA_FAILURE',
        payload: error.message,
      });
    }
  };
};
// ActionApiThree 