import * as fetchUser from "./FetchUserTypes";

const initialState = {
  users: [],
  loading: false,
  error: "",
  limit:4
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchUser.FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case fetchUser.FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case fetchUser.FETCH_USER_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
      case fetchUser.NEXT_PAGE:
      return {
        ...state,
        limit: state.limit + 4,
      };
      case fetchUser.PREV_PAGE:
        return {
          ...state,
          limit: state.limit - 4,
        };
    default:
      return state;
  }
};

export default userReducer;
