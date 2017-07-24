import { FETCH_UI, FETCH_UI_FAILURE, FETCH_UI_SUCCESS } from '../constants';
import axios from 'axios';
// import ui from '../api/ui';

export default function getRequestPage() {
    return dispatch => {
        dispatch({
            type: FETCH_UI,
            payload: {
                isLoading: true
            }
        });

    // https://api.myjson.com/bins/h0fsv (link to json)

        setTimeout(() => {
            axios.get('https://api.myjson.com/bins/h0fsv')
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
            // dispatch({
            //     type: FETCH_UI_SUCCESS,
            //     payload: {
            //         ui,
            //         isLoading: false
            //     }
            // });
        }, 2000);
    };
}

