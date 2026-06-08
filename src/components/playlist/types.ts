export type Track = {
  id: string;
  name: string;
  duration: string;
};

export type Playlist = {
  id?: string;
  name: string;
  cover?: string;
  tracks: Track[];
};