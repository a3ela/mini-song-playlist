import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import SongsReducer from "../features/SongSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: SongsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
