import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./Calls";



const userSlice = createSlice({
  name: "user",
  initialState: {
    value: 0,
    users: [],
    status: "",
  },
  reducers: {
    increment(state) {
      state.value++;
    },
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const { increment } = userSlice.actions;
export default userSlice.reducer;
