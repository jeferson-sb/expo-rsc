"use server";

import { StyleProp, Text, TextStyle } from "react-native";

const textStyle: StyleProp<TextStyle> = { fontSize: 16 };

export const renderUser = async ({ id }: { id: string }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();

  return <Text style={textStyle}>Name: {user?.name}</Text>;
};
