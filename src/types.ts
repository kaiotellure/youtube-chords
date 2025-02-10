export type TrackKeypoint = {
  keys: number[];
  after: number;
}

type TrackMeta = {
  bpm: number;
  offset: number;
  length: number;
};

export type TrackApiResponse = {
  meta: TrackMeta;
  keypoints: TrackKeypoint[];
};

export const INTERVALS = {
  C: 1,
  "C#": 2,
  Db: 2,
  D: 3,
  "D#": 4,
  Eb: 4,
  E: 5,
  F: 6,
  "F#": 7,
  Gb: 7,
  G: 8,
  "G#": 9,
  Ab: 9,
  A: 10,
  "A#": 11,
  Bb: 11,
  B: 12,
} as const;

export type Key = keyof typeof INTERVALS;
