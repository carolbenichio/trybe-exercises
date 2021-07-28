import { GET_CHARACTERS, GET_CHARACTERS_SUCCESS, GET_CHARACTERS_ERROR } from '../actions/actionsType';

const INICIAL_STATE = {
  isLoading: false,
  error: null,
}

function myReducer(state = INICIAL_STATE, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return { ...state, isLoading: true };
    case GET_CHARACTERS_SUCCESS:
      return { character: action.payload, isLoading: false, error: null };
    case GET_CHARACTERS_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}

export default myReducer;