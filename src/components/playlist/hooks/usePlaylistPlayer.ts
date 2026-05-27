import { useState } from "react";

export function usePlaylistPlayer() {
  const [playingIndex, setPlayingIndex] =
    useState(0);

  const [isPlaying, setIsPlaying] =
    useState(true);

  function togglePlay() {
    setIsPlaying((prev) => !prev);
  }

  return {
    playingIndex,
    setPlayingIndex,
    isPlaying,
    togglePlay,
  };
}