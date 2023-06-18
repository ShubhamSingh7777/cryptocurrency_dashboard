import axios from 'axios';

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
      dispatch({
        type: 'FETCH_API1_DATA_SUCCESS',
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_API1_DATA_FAILURE',
        payload: error.message
      });
    }
  };
};

// ActionApiOne.jsx 


