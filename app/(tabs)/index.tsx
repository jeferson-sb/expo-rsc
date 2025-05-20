/// <reference types="react/canary" />
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { FilmListSkeleton } from "@/components/FilmList";
import { Colors } from "@/constants/Colors";

import { renderFilms } from "@/functions/render-films";
import { Suspense } from "react";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Suspense fallback={<FilmListSkeleton />}>{renderFilms()}</Suspense>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.light.background,
  },
});
