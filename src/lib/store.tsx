import { configureStore } from '@reduxjs/toolkit';
import users from './features/userList';
import user from './features/auth';

export const makeStore = () => {
  return configureStore({
    reducer: {
      addUser: users,
      auth: user,
    }
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
