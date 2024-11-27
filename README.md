# Mini Song Playlist

A simple React-Redux project to manage a playlist of songs. This application allows users to perform CRUD (Create, Read, Update, Delete) operations on songs in the playlist.

## Features

- **Add Song**: Add a new song to the playlist.
- **Update Song**: Modify details of an existing song.
- **Delete Song**: Remove a song from the playlist.
- **Search Song**: Search for a song by its name.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/a3ela/mini-song-playlist.git
   cd mini-song-playlist
2. Go in both directories(frontend and backend) and install dependencies
```sh
npm install
```

## Usage

- Open your browser and navigate to `http://localhost:3000`.

- Use the interface to add, update, delete, and search for songs in your playlist.

# Redux Slice and Song Slice

The songSlice contains the following actions:

**getSongs**: Fetch songs from the server.

**getSongsResolved**: Handle the successful fetch of songs.

**getSongsRejected**: Handle errors during the fetch.

**createSong**: Start creating a new song.

**createSongResolved**: Handle the successful creation of a new song.

**createSongRejected**: Handle errors during the song creation.

**updateSong**: Start updating an existing song.

**updateSongResolved**: Handle the successful update of a song.

**updateSongRejected**: Handle errors during the song update.

**deleteSong**: Start deleting a song.

**deleteSongResolved**: Handle the successful deletion of a song.

**deleteSongRejected**: Handle errors during the song deletion.

**clearAll**: Clear the song list.

**searchTerm**: Filter songs based on a search term.

## Live Demo
https://mini-song-playlist.onrender.com/

# Contributing
Contributions are welcome! Please create a new branch for each feature or bugfix. Open a pull request to have your changes reviewed and merged.

Fork the repository.

Create a new branch (git checkout -b feature-name).

Commit your changes (git commit -m 'Add new feature').

Push to the branch (git push origin feature-name).

Open a pull request.

# author
Abel Sintayehu webwizabel@gmail.com

# Contact
For any questions or inquiries, please open an issue or contact the project maintainer at webwizabel@gmail.com.
