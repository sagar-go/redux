import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import userSlice from './Reducer'

export const store = configureStore({
    reducer: {
      users: userSlice
    },
  });
