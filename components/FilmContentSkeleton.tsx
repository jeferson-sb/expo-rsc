import { View } from "react-native";

export const FilmContentSkeleton = () => (
  <View>
    <View>
      <View
        style={{
          width: "100%",
          height: 200,
          backgroundColor: "#e0e0e0",
        }}
      />
    </View>
    <View style={{ padding: 12 }}>
      <View>
        <View
          style={{
            width: 160,
            height: 24,
            backgroundColor: "#e0e0e0",
            borderRadius: 4,
            marginBottom: 4,
          }}
        />
        <View
          style={{
            width: 100,
            height: 18,
            backgroundColor: "#e0e0e0",
            borderRadius: 4,
            marginBottom: 8,
          }}
        />
      </View>
      <View
        style={{
          width: 120,
          height: 16,
          backgroundColor: "#e0e0e0",
          borderRadius: 4,
          marginBottom: 4,
        }}
      />
      <View
        style={{
          width: 160,
          height: 16,
          backgroundColor: "#e0e0e0",
          borderRadius: 4,
          marginBottom: 8,
        }}
      />
      <View
        style={{
          marginVertical: 8,
          height: 1,
          width: "100%",
          backgroundColor: "#cecece",
        }}
      />
      <View
        style={{
          width: "100%",
          height: 60,
          backgroundColor: "#e0e0e0",
          borderRadius: 4,
        }}
      />
    </View>
  </View>
);
