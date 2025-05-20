"use client";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Pressable, Text } from "react-native";

export const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  return (
    <Pressable
      onPress={() => setLikes(likes + 1)}
      style={{ flexDirection: "row", gap: 2, alignItems: "center" }}
    >
      <Ionicons name="heart" size={28} color="black" />
      <Text>{likes}</Text>
    </Pressable>
  );
};
