import { LIMITS } from "./lib/limits";

import type { Track } from "./types";

type Props = {
  track: Track;
  onChange: (value: string) => void;
  onRemove: () => void;
};

export function TrackInputRow({
  track,
  onChange,
  onRemove,
}: Props) {
  return (
    <div className="musica-row">
      <input
        value={track.name}
        maxLength={LIMITS.TRACK_NAME}
        placeholder="Nome da música"
        onChange={(e) =>
          onChange(e.target.value)
        }
      />

      <span className="musica-duracao">
        {track.duration}
      </span>

      <button
        className="btn-remove"
        onClick={onRemove}
      >
        ✕
      </button>
    </div>
  );
}