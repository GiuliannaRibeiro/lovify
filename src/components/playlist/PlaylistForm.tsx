import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";

import { usePlaylistDraft } from "./hooks/usePlaylistDraft";

import catsInLove from "../../assets/cats-in-love.jpg";
import { LIMITS } from "./lib/limits";
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

    if (
      filteredTracks.length >
      LIMITS.MAX_TRACKS
    ) {
      setError(
        `Máximo de ${LIMITS.MAX_TRACKS} faixas por playlist`
      );

      return;
    }

    setError(null);
    setSubmitting(true);

    try {
      const id = await savePlaylist({
        name: (
          name ||
          "Coisas que amo em ti ❤"
        ).slice(0, LIMITS.PLAYLIST_NAME),
        cover: cover || catsInLove,
        tracks: filteredTracks.map(
          (track) => ({
            ...track,
            name: track.name
              .trim()
              .slice(
                0,
                LIMITS.TRACK_NAME
              ),
          })
        ),
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
          maxLength={LIMITS.PLAYLIST_NAME}
          placeholder="Coisas que amo em ti ❤"
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <p className="field-hint">
          {name.length}/{LIMITS.PLAYLIST_NAME}
        </p>
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