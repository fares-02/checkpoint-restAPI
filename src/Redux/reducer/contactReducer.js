import { GET_ALL } from "../action types/actionType";

const initialState = {
  contact: [],
};
const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL:
      return { ...state, contact: payload.contacts };

    default:
      return state;
  }
};
export default contactReducer;
