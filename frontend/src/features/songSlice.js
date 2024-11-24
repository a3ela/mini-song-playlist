import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  searchResults: [],
  isLoading: false,
  error: null,
  searchTerm: "",
};

export const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongs: (state) => {
      state.isLoading = true;
    },
    getSongsResolved: (state, action) => {
      state.songs = action.payload;
      state.isLoading = false;
    },
    getSongsRejected: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    createSong: (state) => {
      state.isLoading = true;
    },
    createSongResolved: (state, action) => {
      state.songs.push(action.payload);
      state.isLoading = false;
    },
    createSongRejected: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateSong: (state) => {
      state.isLoading = true;
    },
    updateSongResolved: (state, action) => {
      const idx = state.songs.findIndex(
        (song) => song._id === action.payload._id
      );
      if (idx !== -1) {
        state.songs[idx] = action.payload;
      }
      state.isLoading = false;
    },
    updateSongRejected: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteSong: (state) => {
      state.isLoading = true;
    },
    deleteSongResolved: (state, action) => {
      state.isLoading = false;
      const id = action.payload;
      state.songs = state.songs.filter((song) => song._id !== id);
    },
    deleteSongRejected: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearAll: (state) => {
      Object.assign(state, initialState);
    },
    search: (state, action) => {
      state.searchTerm = action.payload;
      state.searchResults = state.songs.filter(
        (song) => song.name === action.payload
      );
    },
  },
});

export default songSlice.reducer;

export const {
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
  search,
} = songSlice.actions;
