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
      >
        + Adicionar linha
      </button>
    </div>
  );
}