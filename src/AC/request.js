import { FETCH_UI, FETCH_UI_FAILURE, FETCH_UI_SUCCESS } from '../constants';
import axios from 'axios';

export default function getRequestPage() {
  return (dispatch) => {
    dispatch({
      type: FETCH_UI,
      payload: {
        isLoading: true
      }
    });

    // https://api.myjson.com/bins/10anmf (link to json)
    setTimeout(() => {
      axios.get('https://api.myjson.com/bins/10anmf')
      .then((response) => {
        dispatch({
          type: FETCH_UI_SUCCESS,
          payload: {
            ui: response.data,
            isLoading: false
          }
        });
      }).catch((error) => {
        dispatch({
          type: FETCH_UI_FAILURE,
          payload: {
            isLoading: false
          }
        });
        console.log(error);
      });
    }, 2000);
  }
}
