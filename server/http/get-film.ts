import { cache } from "react";
import "server-only";

const ghibliApi = "https://ghibliapi.vercel.app/films/";

export type GhibliFilm = {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  description: string;
  image: string;
  movie_banner: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string;
};

export const getGhibliFilms = cache(async (): Promise<GhibliFilm[]> => {
  const res = await fetch(ghibliApi);
  if (res.status !== 200) throw new Error(`Status ${res.status}`);
  return res.json();
});

export const getGhibliFilmById = cache(
  async (id: string): Promise<GhibliFilm> => {
    const res = await fetch(`${ghibliApi}/${id}`);
    if (res.status !== 200) throw new Error(`Status ${res.status}`);
    return res.json();
  }
);
