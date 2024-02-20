import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    username: '',
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.username = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.username = '';
    },
  },
});

export const { login, logout } = auth.actions;
export default auth.reducer;
