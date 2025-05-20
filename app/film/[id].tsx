import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";

import { FilmContentSkeleton } from "@/components/FilmContentSkeleton";
import { renderFilm } from "@/functions/render-film";

export default function Film() {
  const { id, name } = useLocalSearchParams<{ id: string; name: string }>();

  return (
    <>
      <Stack.Screen options={{ title: name }} />
      <React.Suspense fallback={<FilmContentSkeleton />}>
        {renderFilm(id)}
      </React.Suspense>
    </>
  );
}
