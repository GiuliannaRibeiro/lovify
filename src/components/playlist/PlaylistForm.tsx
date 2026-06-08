import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";

import { usePlaylistDraft } from "./hooks/usePlaylistDraft";

import catsInLove from "../../assets/cats-in-love.jpg";
import { savePlaylist } from "./lib/playlist-storage";

import { PhotoUpload } from "./PhotoUpload";
import { TrackInputList } from "./TrackInputList";
import loveSong from "../../assets/love-song.png";

export function PlaylistForm() {
  const navigate = useNavigate();

  const [error, setError] =
    useState<string | null>(null);

  const [submitting, setSubmitting] =
    useState(false);

  const {
    name,
    setName,
    cover,
    setCover,
    tracks,
    addTrack,
    removeTrack,
    updateTrack,
  } = usePlaylistDraft();

  useEffect(() => {
    if (
      error &&
      tracks.some((track) =>
        track.name.trim()
      )
    ) {
      setError(null);
    }
  }, [tracks, error]);

  async function handleSubmit() {
    const filteredTracks =
      tracks.filter((track) =>
        track.name.trim()
      );

    if (filteredTracks.length === 0) {
      setError(
        "Adicione pelo menos uma música"
      );

      return;
    }

    setError(null);
    setSubmitting(true);

    try {
      const id = await savePlaylist({
        name: name || "Coisas que amo em ti ❤",
        cover: cover || catsInLove,
        tracks: filteredTracks,
      });

      navigate(`/playlist/${id}`);
    } catch {
      setError(
        "Não foi possível gerar a playlist. Tente novamente."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="form-card">
      <div className="form-section">
        <label>
          Foto da playlist
        </label>

        <PhotoUpload
          cover={cover}
          onChange={setCover}
          onError={setError}
        />
      </div>

      <div className="form-section">
        <label>
          Nome da playlist
        </label>

        <input
          type="text"
          value={name}
          maxLength={40}
          placeholder="Coisas que amo em ti ❤"
          onChange={(e) =>
            setName(e.target.value)
          }
        />
      </div>

      <div className="form-section">
        <label>
          As músicas
        </label>

        <TrackInputList
          tracks={tracks}
          onAdd={addTrack}
          onRemove={removeTrack}
          onChange={updateTrack}
        />
      </div>

      {error && (
        <div
          className="form-error"
          role="alert"
        >
          <AlertCircle size={18} />

          <span>{error}</span>
        </div>
      )}

      <button
        className="btn-gerar"
        onClick={handleSubmit}
        disabled={submitting}
      >
        <img className="btn-icon-song" src={loveSong} />
        <span>
          {submitting
            ? "Gerando..."
            : "Gerar playlist"}
        </span>
      </button>
    </div>
  );
}