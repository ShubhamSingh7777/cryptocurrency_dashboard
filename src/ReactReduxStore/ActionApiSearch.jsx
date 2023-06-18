import axios from 'axios';

export const fetchApiData6 = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
      dispatch({
        type: 'FETCH_API6_DATA_SUCCESS',
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_API6_DATA_FAILURE',
        payload: error.message
      });
    }
  };
};


// ActionApiSeach.jsx 