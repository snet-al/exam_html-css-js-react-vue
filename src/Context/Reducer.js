export const initialState = {
  isChecked: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "handle_checked":
      return {
        ...state,
        isChecked: !state.isChecked,
      };
    default:
      return state;
  }
}

export default reducer;