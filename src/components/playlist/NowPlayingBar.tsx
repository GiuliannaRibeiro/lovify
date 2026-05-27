type Props = {
  trackName: string;
};

export function NowPlayingBar({
  trackName,
}: Props) {
  return (
    <div className="sp-player">
      <div className="player-track-name">
        ♪ {trackName}
      </div>

      <div className="progress-bar">
        <div className="progress-fill" />
      </div>
    </div>
  );
}