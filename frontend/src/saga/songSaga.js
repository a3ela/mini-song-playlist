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
  clearAll,
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

function* addSong(action) {
  try {
    const song = yield call(create, action.payload);
    yield put(createSongResolved(song));
  } catch (error) {
    yield put(createSongRejected(error.message));
  }
}

function* changeSong(action) {
  try {
    const song = yield call(update, action.payload.id, action.payload.song);
    yield put(updateSongResolved(song));
  } catch (error) {
    yield put(updateSongRejected(error.message));
  }
}

function* removeSong(action) {
  try {
    yield call(remove, action.payload.id);
    yield put(deleteSongResolved(action.payload.id));
  } catch (error) {
    yield put(deleteSongRejected(error.message));
  }
}

export default function* songSaga() {
  yield all([
    takeEvery(getSongs.type, fetchSongs),
    takeEvery(createSong.type, addSong),
    takeEvery(updateSong.type, changeSong),
    takeEvery(deleteSong.type, removeSong),
    takeEvery(clearAll.type, fetchSongs),
  ]);
}
