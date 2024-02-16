import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  usersData: []
};

export const fetchApiUsers = createAsyncThunk('fetchApiUsers', async () => {
  const result = await fetch('https://reqres.in/api/users?page=1');
  return result.json();
});

const Slice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
      state.usersData = action.payload;
    });
  }
});

export default Slice.reducer;
