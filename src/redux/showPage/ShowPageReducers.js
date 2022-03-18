import * as ShowPageTypes from "./ShowPageTypes";

const initialState = { pages: "beranda" };

const showPageReducers = (state = initialState, action) => {
  switch (action.type) {
    case ShowPageTypes.SHOW_PAGE:
      return { ...state, pages: action.payload };
    default:
      return state;
  }
};

export default showPageReducers;
