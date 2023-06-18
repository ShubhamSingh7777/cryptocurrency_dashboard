import axios from 'axios';

export const fetchApiData4 = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=13&page=1&sparkline=false');
      dispatch({
        type: 'FETCH_API4_DATA_SUCCESS',
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_API4_DATA_FAILURE',
        payload: error.message
      });
    }
  };
};

//   ActionApiFour.jsx