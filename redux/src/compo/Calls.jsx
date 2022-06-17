import {createAsyncThunk} from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  "myyuser user2",
  async (dispatch, getState) => {
    return await fetch("https://fakestoreapi.com/products/").then((res) =>
      res.json()
    );
  }
);