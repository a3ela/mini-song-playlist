import { all, call, put, takeEvery } from "redux-saga/effects";

import {
  getSongs,
  getSongsRejected,
  getSongsResolved,
  createSong,
  createSongRejected,
  createSongResolved,
  updateSong,
  updateSongRejected,
  updateSongResolved,
  deleteSong,
  deleteSongRejected,
  deleteSongResolved,
} from "../features/songSlice";

import { getAll, create, update, remove } from "../services/songService";

function* fetchSongs() {
  try {
    const songs = yield call(getAll);
    yield put(getSongsResolved(songs));
  } catch (error) {
    yield put(getSongsRejected(error.message));
  }
}

function* watchFetchSongs() {
  yield takeEvery(getSongs.type, fetchSongs);
}

function* addSong(action) {
  try {
    const song = yield call(create, action.payload);
    yield put(createSongResolved(song));
  } catch (error) {
    yield put(createSongRejected(error.message));
  }
}

function* watchAddSong() {
  yield takeEvery(createSong.type, addSong);
}

function* changeSong(action) {
  try {
    const id = action.payload.id;
    const song = action.payload.sendFormData;
    const updatedSong = yield call(update, id, song);
    yield put(updateSongResolved(updatedSong));
  } catch (error) {
    yield put(updateSongRejected(error.message));
  }
}

function* watchChangeSong() {
  yield takeEvery(updateSong.type, changeSong);
}

function* removeSong(action) {
  try {
    yield call(remove, action.payload);
    yield put(deleteSongResolved(action.payload));
  } catch (error) {
    yield put(deleteSongRejected(error.message));
  }
}

function* watchRemoveSong() {
  yield takeEvery(deleteSong.type, removeSong);
}

export default function* songSaga() {
  yield all([
    watchFetchSongs(),
    watchAddSong(),
    watchChangeSong(),
    watchRemoveSong(),
  ]);
}
