import { cache } from "react";
import "server-only";
import { client } from "./connect";

export const getReviews = cache(async () => {
  const { rows } = await client.query("SELECT * FROM reviews");

  return rows;
});

export const getReviewsById = cache(async (id: string) => {
  const { rows } = await client.query(
    "SELECT * FROM reviews WHERE film_id = $1",
    [id]
  );

  return rows;
});
