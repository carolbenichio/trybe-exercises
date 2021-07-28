import charAPI from '../services/charAPI';
import { GET_CHARACTERS, GET_CHARACTERS_SUCCESS, GET_CHARACTERS_ERROR } from './actionsType';

export const getCharacters = () => ({
  type: GET_CHARACTERS,
});

export const getCharactersSuccess = (result) => ({
  type: GET_CHARACTERS_SUCCESS,
  payload: result,
});

export const getCharactersError = (error) => ({
  type: GET_CHARACTERS_ERROR,
  error,
});

// action thunk
export const fetchChar = (char) => {
  return async (dispatch) => {
    dispatch(getCharacters()); // loading
    const response = await charAPI(char);
    console.log(response);
    if (response.length === 0) {
      return dispatch(getCharactersError(new Error(`Character ${char} not found`)));
    }
    return dispatch(getCharactersSuccess(response[0]))
  }
}