"use client";

import { Image } from "expo-image";
import type { DimensionValue } from "react-native";

export const CoverImage = ({
  source,
  width,
  height,
  radius = 8,
}: {
  source: string;
  width: DimensionValue;
  height: DimensionValue;
  radius?: number;
}) => {
  return (
    <Image
      style={{
        width,
        height,
        backgroundColor: "#0553",
        borderRadius: radius,
      }}
      source={source}
      contentFit="cover"
      transition={1000}
    />
  );
};
