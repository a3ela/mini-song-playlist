import { configureStore, miniSerializeError } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import SongsReducer from "./features/songSlice";
import songSaga from "./saga/songSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: SongsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(songSaga);

export default store;
