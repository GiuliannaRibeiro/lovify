import { compressImage } from "./lib/compress-image";
import photoLove from "../../assets/photo-love.png";

type Props = {
  cover?: string;
  onChange: (value: string) => void;
  onError?: (message: string) => void;
};

export function PhotoUpload({
  cover,
  onChange,
  onError,
}: Props) {
  async function handleFile(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file =
      event.target.files?.[0];

    if (!file) return;

    try {
      const compressed =
        await compressImage(file);

      onChange(compressed);
    } catch {
      onError?.(
        "Não foi possível carregar a foto. Tente outra imagem."
      );
    }

    event.target.value = "";
  }

  return (
    <div className="photo-upload">
      <label className="photo-preview">
        {cover ? (
          <img className="photo-selected" src={cover} alt="" />
        ) : (
          <span>
            <img className="icon-select-photo" src={photoLove} alt="" />
          </span>
        )}

        <input
          hidden
          type="file"
          accept="image/*"
          onChange={handleFile}
        />
      </label>
    </div>
  );
}