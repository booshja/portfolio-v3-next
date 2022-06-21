// dependencies
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
// slices
import themeReducer from './slices/themeSlice';
// import CommerceSlice from "./slices/commerceSlice";

const combinedReducer = combineReducers({ theme: themeReducer });

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }

  return combinedReducer(state, action);
};

export const makeStore = () =>
  configureStore({
    reducer: { reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
  });

export const wrapper = createWrapper(makeStore, { debug: true });
