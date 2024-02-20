import { configureStore } from '@reduxjs/toolkit';
import users from './features/userList';
import authReducer from './features/auth';

export const makeStore = () => {
  return configureStore({
    reducer: {
      userList: users,
      auth: authReducer,
    }
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
