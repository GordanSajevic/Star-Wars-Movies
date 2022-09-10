import { configureStore } from '@reduxjs/toolkit';
import movieListReducer from './MovieListSlice';
import movieItemReducer from './MovieItemSlice';

export const store = configureStore({
  reducer: {
    movies: movieListReducer,
    item: movieItemReducer
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch