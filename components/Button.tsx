"use client";
import { Pressable, Text } from "react-native";

type ButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
};

export const Button = ({ onPress, children }: ButtonProps) => (
  <Pressable
    onPress={() => onPress()}
    style={{
      padding: 12,
      backgroundColor: "#faebd7",
      maxWidth: 200,
      borderRadius: 100,
    }}
  >
    <Text style={{ fontWeight: "bold", textAlign: "center" }}>{children}</Text>
  </Pressable>
);
