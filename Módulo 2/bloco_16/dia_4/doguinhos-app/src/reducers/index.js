const GET_IMAGE = 'GET_IMAGE';
const REQUEST_IMAGE = 'REQUEST_IMAGE';
const FAILED_REQUEST = 'FAILED_REQUEST';

const initialState = {
  isFetching: false,
  imagePath: '',
  error: '',
};

function fetchAPI(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IMAGE:
      return { ...state, isFetching: true };
    case GET_IMAGE:
      return { ...state, imagePath: action.payload, isFetching: false };
    case FAILED_REQUEST:
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
}

export default fetchAPI;