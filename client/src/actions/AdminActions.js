import * as AdminApi from "../api/AdminRequests";

export const fetchAllUsers = () => async (dispatch) => {
  dispatch({ type: "FETCH_USERS_START" });
  try {
    const { data } = await AdminApi.fetchAllUsers();
    dispatch({ type: "FETCH_USERS_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "FETCH_USERS_FAIL" });
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    await AdminApi.deleteUser(userId);
    dispatch({ type: "DELETE_USER", payload: userId });
  } catch (error) {
    console.log(error);
  }
};