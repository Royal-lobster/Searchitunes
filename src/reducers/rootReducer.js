const initState = {
  searchKeyword: "",
  results: undefined,
};
const rootReducer = (state = initState, action) => {
  if (action.type === "SET_KEYWORD") {
    return {
      ...state,
      searchKeyword: action.payload,
    };
  } else if (action.type === "SET_SEARCH_RESULTS") {
    return {
      ...state,
      results: action.payload,
    };
  } else {
    return state;
  }
};
export default rootReducer;
