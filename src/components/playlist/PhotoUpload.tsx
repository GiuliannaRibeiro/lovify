import photoLove from "../../assets/photo-love.png";

type Props = {
  cover?: string;
  onChange: (value: string) => void;
};

export function PhotoUpload({
  cover,
  onChange,
}: Props) {
  function handleFile(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file =
      event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      onChange(reader.result as string);
    };

    reader.readAsDataURL(file);
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