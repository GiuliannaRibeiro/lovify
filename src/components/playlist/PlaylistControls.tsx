import { Pause, Play } from "lucide-react";

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
        {isPlaying ? (
          <Pause
            className="btn-play-icon"
            size={15}
            fill="currentColor"
          />
        ) : (
          <Play
            className="btn-play-icon"
            size={15}
            fill="currentColor"
          />
        )}
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