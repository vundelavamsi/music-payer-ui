# Music Player UI

This project is a Music Player UI built using ReactJS. The application allows users to play music tracks, navigate through songs, control the volume, and see details about the current song. The UI includes features like search, category filtering, and interactive animations. The design is responsive, ensuring a smooth experience across various device sizes.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Styling](#styling)

## Features

- **Search Functionality:** Allows users to search for songs by name or artist.
- **Category Filtering:** Users can filter songs by categories like "For You" or "Top Track."
- **Music Controls:** Play, pause, skip to next/previous track, and volume control.
- **Seek Bar:** Allows users to seek through the track.
- **Responsive Design:** The UI is optimized for both desktop and mobile devices.
- **Loading Indicator:** Shows a loading indicator while songs are being fetched from the API.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vundelavamsi/music-player-ui
   cd music-player-ui

2. Install dependencies:

    ```bash
    npm install

3. Start the development server:

    ```bash
    npm start

The application will be available at `http://localhost:3000`

## Usage

### Playing a Song

1. Select a song from the list to start playing it.
2. Use the play/pause button to control playback.
3. Skip to the next or previous track using the respective buttons.
4. Adjust the volume using the volume control.

### Searching and Filtering

1. Use the search bar to filter songs by name or artist.
2. Switch between categories ("For You" and "Top Track") using the category buttons.

## Components

### MusicItem
 - Displays a single music item in the list, including the song cover, name, artist, and duration.
 - Highlights the currently playing song.

### MusicList
 - Manages and displays the list of songs.
 - Includes search functionality and category filtering.

### MusicPlayer
 - Handles playback controls, including play/pause, next/previous track, seek bar, and volume control.
 - Displays the current song's details and cover image.

## Styling

The styling for each component is managed in separate CSS files within their respective component folders. Key design elements include:

1. Responsive Design: Media queries are used to adjust the layout and size of elements for different screen sizes.
2. Loading Indicator: A simple spinner is used to indicate loading status.
3. Animations: Interactive elements like buttons have subtle animations to enhance the user experience.