import { Song, songs } from "./songsData";

export const areSameSong = (song: Song, songTitle: string): boolean => {
  const areSame = song.title === songTitle;

  return areSame;
};

export const addSong = (song: Song, songs: Song[]): void => {
  songs.push(song);
};

export const isPlaylistFull = (songs: Song[]): boolean => {
  const isFull = songs.length >= 4;

  return isFull;
};

export const getErrorMessage = (errorCode: string): string => {
  let errorMessage: string;

  switch (errorCode) {
    case "exists":
      errorMessage = "La canción ya existe";
      break;
    case "limit":
      errorMessage = "La playlist está llena";
      break;
    default:
      errorMessage = "La información no es válida";
  }

  return errorMessage;
};

export const getSongsCount = (songs: Song[]): number => {
  const songsCount = songs.length;

  return songsCount;
};

export const removeSongByPosition = (songs: Song[], position: number): void => {
  songs.splice(position, 1);
};

export const setCurrentSong = (song: Song): void => {
  song.isCurrent = true;
};

export const getNextSongPosition = (
  songs: Song[],
  currentSongPosition: number
) => {
  let nextSongPosition = currentSongPosition + 1;
  if (currentSongPosition === songs.length - 1) {
    nextSongPosition = 0;
  }

  return nextSongPosition;
};

export const isCurrentSong = (song: Song): boolean => {
  const isCurrent = song.isCurrent !== false;

  return isCurrent;
};
