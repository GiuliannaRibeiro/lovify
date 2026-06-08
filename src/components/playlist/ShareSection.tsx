import { Check } from "lucide-react";

import { useClipboard } from "./hooks/useClipboard";
import heartLink from "../../assets/heart-link.png"

type Props = {
  url: string;
};

export function ShareSection({
  url,
}: Props) {
  const { copied, copy } =
    useClipboard();

  return (
    <div className="share-section">
      <div className="share-title">
        <img className="btn-icon-heart" src={heartLink} alt="" />
        <span>Compartilhar playlist</span>
      </div>

      <div className="share-link-box">
        <input
          readOnly
          value={url}
          className="share-link-input"
        />

        <button
          className={`btn-copiar ${
            copied ? "copiado" : ""
          }`}
          onClick={() => copy(url)}
        >
          {copied ? (
            <>
              <Check size={16} />
              Copiado!
            </>
          ) : (
            "Copiar"
          )}
        </button>
      </div>
    </div>
  );
}