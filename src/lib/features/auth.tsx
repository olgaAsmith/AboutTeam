import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface User {
  username: string;
}

interface Auth {
  user: User | null;
  error: string | null;
}

const initialState: Auth = {
  user: null,
  error: null
};


export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (newUser: { username: string; password: string }) => {
    const user: User = { ...newUser };
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }
);

export const checkUserInLocalStorage = createAsyncThunk('auth/checkUserInLocalStorage', () => {
  const user = localStorage.getItem('user');
  return !!user;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    }
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  }
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
