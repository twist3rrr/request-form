import { FETCH_UI, FETCH_UI_FAILURE, FETCH_UI_SUCCESS } from '../constants';

const defaultState = {
    ui: {},
    isLoading: true
};

export default function requestReducer(state = defaultState, action = {}) {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case FETCH_UI:
        case FETCH_UI_FAILURE:
            return {
                ...state,
                isLoading: payload.isLoading
            };
        case FETCH_UI_SUCCESS:
            return {
                ...state,
                ui: payload.ui,
                isLoading: false
            };
        default:
            return state;
    }
}
