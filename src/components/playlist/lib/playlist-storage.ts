import type { Playlist } from "../types";

const STORAGE_KEY = "lovify-playlists";

export function savePlaylist(
  playlist: Playlist
) {
  const playlists = getAllPlaylists();

  playlists[playlist.id] = playlist;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(playlists)
  );
}

export function getPlaylist(id: string) {
  const playlists = getAllPlaylists();

  return playlists[id] || null;
}

function getAllPlaylists(): Record<
  string,
  Playlist
> {
  const data = localStorage.getItem(
    STORAGE_KEY
  );

  if (!data) return {};

  return JSON.parse(data);
}