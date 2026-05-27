import type { Playlist } from "./types";
import catsInLove from "../../assets/cats-in-love.jpg";

type Props = {
  playlist: Playlist;
};

export function PlaylistHero({
  playlist,
}: Props) {
  return (
    <div className="sp-header">
      <div className="playlist-hero">
        <div className="playlist-cover">
          {playlist.cover ? (
            <img
              src={playlist.cover}
              alt={playlist.name}
            />
          ) : (
            <img
              src={catsInLove}
            />
          )}
        </div>

        <div className="playlist-info">
          <div className="playlist-type">
            Playlist
          </div>

          <h1 className="playlist-name">
            {playlist.name}
          </h1>

          <div className="playlist-meta">
            <strong>Lovify</strong>
            {" · "}
            {playlist.tracks.length} músicas
          </div>
        </div>
      </div>
    </div>
  );
}