/* eslint-disable default-param-last */
import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './modeState';

const store = configureStore({
  reducer: {
    mode: modeReducer,

  },
});

export default store;
