import { PlaylistForm } from "../components/playlist/PlaylistForm";
import lovifyIcon from "../assets/lovify-minimalist.png";

export default function HomePage() {
  return (
    <main id="screen-form">
      <div className="form-header">
        <h1 className="main-title">
          Crie a playlist do seu amor
          <img className="main-title-icon" src={lovifyIcon} alt="lovify icon" />
        </h1>

        <p>
          Personalize e mande o link
        </p>
      </div>

      <PlaylistForm />
    </main>
  );
}