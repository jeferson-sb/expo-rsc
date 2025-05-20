"use server";

import { marked } from "marked";
import { Text, View } from "react-native";

import { CoverImage } from "@/components/CoverImage";
import { LikeButton } from "@/components/LikeButton";
import { WebView } from "@/components/WebView";

import { getReviewsById } from "@/server/database/get-reviews";
import { getGhibliFilmById, type GhibliFilm } from "@/server/http/get-film";

export const renderFilm = async (id: string) => {
  const film = await getGhibliFilmById(id);
  const rows = await getReviewsById(id);
  const reviews = await Promise.all(
    rows.map(async (review) => ({
      id: review.id,
      username: review.username,
      content: await marked(review.content),
    }))
  );

  return <FilmContent film={film} reviews={reviews} />;
};

const FilmContent = ({
  film,
  reviews,
}: {
  film: GhibliFilm;
  reviews: { id: string; username: string; content: string }[];
}) => (
  <View style={{ flex: 1 }}>
    <View>
      <CoverImage
        source={film?.movie_banner}
        width="100%"
        height={200}
        radius={0}
      />
    </View>
    <View
      style={{
        flex: 1,
        padding: 12,
      }}
    >
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {film?.original_title}
        </Text>
        <Text style={{ fontStyle: "italic", color: "#454545" }}>
          ({film?.title})
        </Text>
      </View>
      <Text style={{ color: "#303030", fontSize: 14 }}>
        {film?.director} • {film?.release_date}
      </Text>
      <Text style={{ color: "#303030" }}>Producer(s): {film?.producer}</Text>

      <View style={{ position: "absolute", right: 20, top: "10%" }}>
        <LikeButton />
      </View>

      <View
        style={{
          marginVertical: 8,
          height: 1,
          width: "100%",
          backgroundColor: "#cecece",
        }}
      />
      <Text style={{ color: "#464646" }}>{film?.description}</Text>

      {reviews.length > 0 && (
        <View
          style={{
            backgroundColor: "#e8e8e8",
            flex: 1,
            padding: 8,
            marginTop: 8,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#464646" }}>Reviews:</Text>
          {reviews.map((review) => (
            <View
              key={review.id}
              style={{
                flex: 1,
                marginVertical: 4,
              }}
            >
              <Text style={{ fontWeight: "bold", textTransform: "capitalize" }}>
                {review.username}
              </Text>
              <WebView data={{ html: review.content }} />
            </View>
          ))}
        </View>
      )}
    </View>
  </View>
);
