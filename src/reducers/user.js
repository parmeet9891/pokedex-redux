
import * as type from './../constants/ActionTypes.js';

const initialState = {
    loading: false,
    data: [],
    pokemonData: []
};

const user = (state = initialState, action) => {
    switch(action.type) {
        case type.IS_FETCHING:
            return {
                ...state,
                loading: action.loading
            }
        case type.FETCHING_SUCCESS:
            return {
                ...state,
                loading: action.loading,
                data: action.payload
            }
        case type.FETCHING_FAIL:
            return {
                ...state,
                loading: action.loading
            }
        case type.FETCHING_NAME_SUCCESS:
          return {
            ...state,
            loading: action.loading,
            pokemonData: action.payload
          }
        default:
            return state

    }
}

export default user
