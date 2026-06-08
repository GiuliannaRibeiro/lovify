import { Play } from "lucide-react";

import type { Track } from "./types";

type Props = {
  track: Track;
  index: number;
  playing: boolean;
  onClick: () => void;
};

export function TrackItem({
  track,
  index,
  playing,
  onClick,
}: Props) {
  return (
    <div
      className={`track-item ${
        playing ? "playing" : ""
      }`}
      onClick={onClick}
    >
      <span className="track-num">
        {playing ? (
          <Play
            className="track-play-icon"
            size={14}
            fill="currentColor"
          />
        ) : (
          index + 1
        )}
      </span>

      <div className="track-info">
        <div className="track-name">
          {track.name}
        </div>

        <div className="track-artist">
          Lovify
        </div>
      </div>

      <span className="track-dur">
        {track.duration}
      </span>
    </div>
  );
}