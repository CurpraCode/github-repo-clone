import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  user: [],
  error: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    loginError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const { loginPending, loginSuccess, loginError } = loginSlice.actions;


export default loginSlice.reducer;
