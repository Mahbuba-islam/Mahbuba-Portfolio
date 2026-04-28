import data from "./palette.json";

export type Palette = {
  image: string | null;
  Vibrant: string;
  LightVibrant: string;
  DarkVibrant: string;
  Muted: string;
  LightMuted: string;
  DarkMuted: string;
};

export const palette = data as Palette;
