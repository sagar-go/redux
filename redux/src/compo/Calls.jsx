import {createAsyncThunk} from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  "myyusersss  sssssssssssss",
  async (dispatch, getState) => {
    return await fetch("https://fakestoreapi.com/products/").then((res) =>
      res.json()
    );
  }
);