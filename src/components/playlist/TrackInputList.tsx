import { LIMITS } from "./lib/limits";

import type { Track } from "./types";

import { TrackInputRow } from "./TrackInputRow";

type Props = {
  tracks: Track[];

  onAdd: () => void;

  onRemove: (id: string) => void;

  onChange: (
    id: string,
    value: string
  ) => void;
};

export function TrackInputList({
  tracks,
  onAdd,
  onRemove,
  onChange,
}: Props) {
  const atTrackLimit =
    tracks.length >=
    LIMITS.MAX_TRACKS;

  return (
    <div>
      <div className="musicas-list">
        {tracks.map((track) => (
          <TrackInputRow
            key={track.id}
            track={track}
            onChange={(value) =>
              onChange(track.id, value)
            }
            onRemove={() =>
              onRemove(track.id)
            }
          />
        ))}
      </div>

      <button
        className="btn-add-musica"
        onClick={onAdd}
        disabled={atTrackLimit}
      >
        + Adicionar linha
      </button>

      <p className="field-hint">
        {tracks.length}/{LIMITS.MAX_TRACKS}{" "}
        faixas
      </p>
    </div>
  );
}