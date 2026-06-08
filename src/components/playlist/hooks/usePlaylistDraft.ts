import { useState } from "react";

import type { Track } from "../types";

import { randomDuration } from "../lib/duration";
import { LIMITS } from "../lib/limits";

export function usePlaylistDraft() {
  const [name, setName] = useState("");

  const [cover, setCover] =
    useState<string>();

  const [tracks, setTracks] = useState<
    Track[]
  >([
    {
      id: crypto.randomUUID(),
      name: "O jeito que você ri",
      duration: "3:21",
    },
    {
      id: crypto.randomUUID(),
      name: "O seu cheiro",
      duration: "2:47",
    },
  ]);

  function addTrack() {
    setTracks((prev) => {
      if (
        prev.length >=
        LIMITS.MAX_TRACKS
      ) {
        return prev;
      }

      return [
        ...prev,
        {
          id: crypto.randomUUID(),
          name: "",
          duration: randomDuration(),
        },
      ];
    });
  }

  function removeTrack(id: string) {
    setTracks((prev) =>
      prev.filter(
        (track) => track.id !== id
      )
    );
  }

  function updateTrack(
    id: string,
    value: string
  ) {
    setTracks((prev) =>
      prev.map((track) =>
        track.id === id
          ? {
              ...track,
              name: value.slice(
                0,
                LIMITS.TRACK_NAME
              ),
            }
          : track
      )
    );
  }

  return {
    name,
    setName,
    cover,
    setCover,
    tracks,
    addTrack,
    removeTrack,
    updateTrack,
  };
}