import {createAsyncThunk} from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  "myusers",
  async (dispatch, getState) => {
    return await fetch("https://fakestoreapi.com/products/").then((res) =>
      res.json()
    );
  }
);