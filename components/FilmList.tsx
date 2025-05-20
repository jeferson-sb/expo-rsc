"use client";

import { Link } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";

import { CoverImage } from "@/components/CoverImage";
import { GhibliFilm } from "@/server/http/get-film";

export const FilmList = ({ films }: { films: GhibliFilm[] }) => (
  <FlatList
    horizontal
    data={films}
    keyExtractor={(item) => item.id}
    ItemSeparatorComponent={() => <View style={{ width: 10 }}></View>}
    renderItem={({ item: film }) => <FilmCard film={film} />}
  />
);

export const FilmListSkeleton = () => {
  return (
    <View style={{ flexDirection: "row", marginTop: 8 }}>
      {Array.from({ length: 3 }).map((_, index) => (
        <View
          key={index}
          style={{
            marginHorizontal: 8,
            borderRadius: 8,
            width: 200,
            height: 300,
            backgroundColor: "#0553",
          }}
        />
      ))}
    </View>
  );
};

const FilmCard = ({ film }: { film: GhibliFilm }) => (
  <Link
    href={{
      pathname: "/film/[id]",
      params: { id: film?.id, name: film?.title },
    }}
    asChild
  >
    <Pressable>
      <View style={{ marginVertical: 8 }}>
        <CoverImage source={film?.image} width={200} height={300} />
      </View>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {film?.original_title}
        </Text>
        <Text style={{ fontStyle: "italic", color: "#454545" }}>
          ({film?.title})
        </Text>
      </View>
    </Pressable>
  </Link>
);
