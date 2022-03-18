import axios from "axios";
import * as fetchUser from "./FetchUserTypes";

export const fetchUserRequest = () => {
  return {
    type: fetchUser.FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: fetchUser.FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: fetchUser.FETCH_USER_FAILURE,
    payload: error,
  };
};

export const nextPage = (limit) => {
  return {
    type: fetchUser.NEXT_PAGE,
    payload: limit + 4,
  };
};

export const prevPage = () => {
  return {
    type: fetchUser.PREV_PAGE,
  };
};
export const fetchUsers = (limit) => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios
      .get(`https://randomuser.me/api/?results=${limit}`)
      .then((response) => {
        const users = response.data.results;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        const errorMsg = "Koneksi gagal";
        dispatch(fetchUserFailure(errorMsg));
      });
  };
};
