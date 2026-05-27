import { useNavigate } from "react-router-dom";

import { usePlaylistDraft } from "./hooks/usePlaylistDraft";

import { savePlaylist } from "./lib/playlist-storage";
import { generatePlaylistId } from "./lib/playlist-id";

import { PhotoUpload } from "./PhotoUpload";
import { TrackInputList } from "./TrackInputList";
import loveSong from "../../assets/love-song.png";

export function PlaylistForm() {
  const navigate = useNavigate();

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

  function handleSubmit() {
    const filteredTracks =
      tracks.filter((track) =>
        track.name.trim()
      );

    if (filteredTracks.length === 0) {
      alert(
        "Adicione pelo menos uma música"
      );

      return;
    }

    const id = generatePlaylistId();

    savePlaylist({
      id,
      name: name || "Coisas que amo em ti ❤",
      cover,
      tracks: filteredTracks,
    });

    navigate(`/playlist/${id}`);
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

      <button
        className="btn-gerar"
        onClick={handleSubmit}
      >
        <img className="btn-icon-song" src={loveSong} />
        <span>Gerar playlist</span>
      </button>
    </div>
  );
}