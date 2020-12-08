import {
  createSlice,
  configureStore,
  getDefaultMiddleware,
  PayloadAction,
} from '@reduxjs/toolkit';
import {User} from './types/User';

const slice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: 'Jean Felipe',
      email: 'jf.melo6@gmail.com',
      avatar:
        'https://specials-images.forbesimg.com/imageserve/5f9ad4e51fc4f6badf44854e/960x0.jpg',
    },
    accessToken: '',
    isLogged: false,
    expiresIn: 0,
  },
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
    },
    setExpiresIn: (state, action: PayloadAction<number>) => {
      state.expiresIn = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    clearState: (state) => {
      state = {
        user: {
          name: '',
          email: '',
          avatar: '',
        },
        accessToken: '',
        isLogged: false,
        expiresIn: 0,
      };
    },
  },
});

export const actions = slice.actions;

export const store = configureStore({
  reducer: slice.reducer,
  middleware: [...getDefaultMiddleware({immutableCheck: false})],
});
