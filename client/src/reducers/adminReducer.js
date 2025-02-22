const adminReducer = (state = { users: [], loading: false, error: false }, action) => {
    switch (action.type) {
      case "FETCH_USERS_START":
        return { ...state, loading: true, error: false };
      case "FETCH_USERS_SUCCESS":
        return { ...state, users: action.payload, loading: false, error: false };
      case "FETCH_USERS_FAIL":
        return { ...state, loading: false, error: true };
      case "DELETE_USER":
        return { ...state, users: state.users.filter((user) => user._id !== action.payload) };
      default:
        return state;
    }
  };
  
  export default adminReducer;