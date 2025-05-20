"use server";

import { FilmList } from "@/components/FilmList";
import { getGhibliFilms } from "@/server/http/get-film";

export const renderFilms = async () => {
  const films = await getGhibliFilms();

  return <FilmList films={films} />;
};
