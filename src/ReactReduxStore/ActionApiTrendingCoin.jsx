import axios from 'axios';
export const fetchApiData5 = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en');
      dispatch({
        type: 'FETCH_API5_DATA_SUCCESS',
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_API5_DATA_FAILURE',
        payload: error.message
      });
    }
  };
};

// ActionApiOfTrending 
