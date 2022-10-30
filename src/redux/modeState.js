/* eslint-disable default-param-last */
import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

export const modeSlice = createSlice({
  name: 'mode',
  initialState: null,
  reducers: {
    // register: (state, action) => action.payload.user,
    darkMode: (state, action) => action.payload.mode === null ? "light" : null,
    // logOut: () => null,
  },
});

export const { darkMode } = modeSlice.actions;

export const useMode = () => {
  const dispatch = useDispatch();
  
  return {
    mode: useSelector((state) => state.mode),
    drakMode: (modeData) => dispatch(darkMode(modeData)),
    // logIn: (userData) => dispatch(logIn(userData)),
    // logOut: () => dispatch(logOut()),

  };
};

const modeReducer = modeSlice.reducer;

export default modeReducer;