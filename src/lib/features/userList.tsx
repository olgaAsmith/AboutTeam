import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface AppState {
  usersData: UserData[];
}

interface UserData {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
}

const initialState: AppState = {
  usersData: []
};

export const fetchApiUsers = createAsyncThunk('fetchApiUsers', async () => {
  const result = await fetch('https://reqres.in/api/users?page=1');
  return result.json();
});

const slice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
      state.usersData = action.payload.data;
    });
  }
});

export default slice.reducer;
