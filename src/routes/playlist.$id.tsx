import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getPlaylist } from "../components/playlist/lib/playlist-storage";

import lovifyIcon from "../assets/lovify-minimalist.png";

import { usePlaylistPlayer } from "../components/playlist/hooks/usePlaylistPlayer";

import { PlaylistHero } from "../components/playlist/PlaylistHero";
import { PlaylistControls } from "../components/playlist/PlaylistControls";
import { TrackList } from "../components/playlist/TrackList";
import { ShareSection } from "../components/playlist/ShareSection";
import { NowPlayingBar } from "../components/playlist/NowPlayingBar";

import type { Playlist } from "../components/playlist/types";

export default function PlaylistPage() {
  const { id } = useParams();

  const [playlist, setPlaylist] =
    useState<Playlist | null>(null);

  const [loading, setLoading] =
    useState(true);

  const {
    playingIndex,
    setPlayingIndex,
    isPlaying,
    togglePlay,
  } = usePlaylistPlayer();

  useEffect(() => {
    async function loadPlaylist() {
      if (!id) {
        setLoading(false);
        return;
      }
  
      const [data] = await Promise.all([
        getPlaylist(id),
  
        new Promise((resolve) =>
          setTimeout(resolve, 2000)
        ),
      ]);
  
      setPlaylist(data);
  
      setLoading(false);
    }
  
    loadPlaylist();
  }, [id]);

  if (loading) {
    return (
      <div className="playlist-loading">
        <img
          src={lovifyIcon}
          alt="Lovify"
          className="loading-heart"
        />
  
        <p>
          Carregando playlist...
        </p>
      </div>
    );
  }

  if (!playlist) {
    return (
      <div>
        Playlist não encontrada
      </div>
    );
  }

  const currentTrack =
    playlist.tracks[playingIndex];

  return (
    <main id="screen-spotify">
      <PlaylistHero playlist={playlist} />

      <PlaylistControls
        isPlaying={isPlaying}
        onToggle={togglePlay}
      />

      <TrackList
        tracks={playlist.tracks}
        playingIndex={playingIndex}
        onSelect={setPlayingIndex}
      />

      <ShareSection
        url={window.location.href}
      />

      <NowPlayingBar
        trackName={currentTrack.name}
      />
    </main>
  );
}