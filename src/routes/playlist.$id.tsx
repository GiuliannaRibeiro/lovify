import { useParams } from "react-router-dom";

import { getPlaylist } from "../components/playlist/lib/playlist-storage";

import { usePlaylistPlayer } from "../components/playlist/hooks/usePlaylistPlayer";

import { PlaylistHero } from "../components/playlist/PlaylistHero";
import { PlaylistControls } from "../components/playlist/PlaylistControls";
import { TrackList } from "../components/playlist/TrackList";
import { ShareSection } from "../components/playlist/ShareSection";
import { NowPlayingBar } from "../components/playlist/NowPlayingBar";

export default function PlaylistPage() {
  const { id } = useParams();

  const playlist = getPlaylist(id!);

  const {
    playingIndex,
    setPlayingIndex,
    isPlaying,
    togglePlay,
  } = usePlaylistPlayer();

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