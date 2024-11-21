import {all, call, put, takeEvery} from 'redux-saga/effects';

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
    clearAll
} from '../features/songSlice'

