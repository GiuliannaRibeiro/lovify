import checkIcon from '../../assets/check-icon.png'
import shareLink from '../../assets/download-Icon.png'

type Props = {
  isPlaying: boolean;
  onToggle: () => void;
};

export function PlaylistControls({
  isPlaying,
  onToggle,
}: Props) {
  return (
    <div className="sp-controls">
      <button
        className="btn-play"
        onClick={onToggle}
      >
        {isPlaying ? "⏸" : "▶"}
      </button>

      <button className="btn-heart">
        <img 
          className='btn-icon-fav'
          src={checkIcon}
          alt='check icon'
          />
        <img 
          className='btn-icon-download'
          src={shareLink}
          alt='share icon'
        />
      </button>
    </div>
  );
}