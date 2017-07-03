import { FETCH_UI, FETCH_UI_FAILURE, FETCH_UI_SUCCESS } from '../constants';
import axios from 'axios';

export default function getRequestPage() {
  return (dispatch) => {
    dispatch({
      type: FETCH_UI,
      isLoading: true
    });

    // https://api.myjson.com/bins/vydun (link to json)

    axios.get('https://api.myjson.com/bins/vydun')
    .then((response) => {
      dispatch({
        type: FETCH_UI_SUCCESS,
        payload: {
          ui: response,
          isLoading: false
        }
      });
    }).catch((error) => {
      dispatch({
        type: FETCH_UI_FAILURE,
        isLoading: false
      });
      console.log(error);
    });
  }
}
