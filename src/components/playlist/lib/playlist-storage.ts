import {
  addDoc,
  collection,
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "../../../lib/firebase";

import type { Playlist } from "../types";

export async function savePlaylist(
  playlist: Playlist
) {
  const docRef = await addDoc(
    collection(db, "playlists"),
    playlist
  );

  return docRef.id;
}

export async function getPlaylist(
  id: string
) {
  const docRef = doc(
    db,
    "playlists",
    id
  );

  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }

  return {
    id: docSnap.id,
    ...docSnap.data(),
  } as Playlist;
}