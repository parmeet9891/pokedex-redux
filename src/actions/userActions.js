import * as type from './../constants/ActionTypes.js';
import axios from 'axios';

export function isFetching() {
    return {
        type: type.IS_FETCHING,
        loading: true,
    }
}

export function fetchingSuccess(payload) {
    return {
        type: type.FETCHING_SUCCESS,
        loading: false,
        payload
    }
}

export function fetchingNameSuccess(payload) {
    return {
        type: type.FETCHING_NAME_SUCCESS,
        loading: false,
        payload
    }
}

export function fetchingFail() {
    return {
        type: type.FETCHING_FAIL,
        loading: false,
    }
}

/*export function fetchDataWithRedux() {
    return (dispatch) => {
        dispatch(isFetching());
        return fetchData().then(([response, json]) => {
            if(response.length > 0) {
                dispatch(fetchingSuccess(json))
            }
            else {
                dispatch(fetchingFail())
            }
        })
    }
}*/

export function fetchData() {
    return (dispatch) => {
        dispatch(isFetching());
        const URL = "./data/data.json";
        return axios.get(URL)
        .then((response) => {
            dispatch(fetchingSuccess(response.data))
        })
        .catch((error) => {
            dispatch(fetchingFail());
        })
    }
}

export function getPokemonByName(name) {
  return (dispatch) => {
    dispatch(isFetching());
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => {
      dispatch(fetchingNameSuccess(response.data))
    })
    .catch((error) => {
      dispatch(fetchingFail())
    })
  }
}
