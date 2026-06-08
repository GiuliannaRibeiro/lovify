import { Clock } from "lucide-react";

import type { Track } from "./types";

import { TrackItem } from "./TrackItem";

type Props = {
  tracks: Track[];

  playingIndex: number;

  onSelect: (index: number) => void;
};

export function TrackList({
  tracks,
  playingIndex,
  onSelect,
}: Props) {
  return (
    <div className="sp-tracklist">
      <div className="track-header">
        <span>#</span>

        <span>Música</span>

        <Clock
          className="track-header-clock"
          size={14}
        />
      </div>

      {tracks.map((track, index) => (
        <TrackItem
          key={track.id}
          track={track}
          index={index}
          playing={
            index === playingIndex
          }
          onClick={() =>
            onSelect(index)
          }
        />
      ))}
    </div>
  );
}