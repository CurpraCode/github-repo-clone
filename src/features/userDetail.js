import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  userD: [],
  error: null,
};

export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    userDetailsPending: (state) => {
      state.isLoading = true;
    },
    userDetailsSuccess: (state, action) => {
      state.isLoading = false;
      state.userD = action.payload;
    },
    userDetailsError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});


export const { userDetailsPending, userDetailsSuccess, userDetailsError } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
