"use client";

import { View } from "react-native";
import { WebView as RNWebView } from "react-native-webview";

const prehtml = "<style>body{font-size:2rem;font-family: system-ui;}</style>";

export const WebView = ({ data }: { data: Record<string, string> }) => (
  <View style={{ flex: 1 }}>
    <RNWebView
      style={{ flex: 1, backgroundColor: "transparent" }}
      source={{
        html: `${prehtml}${data?.html}`,
      }}
    />
  </View>
);
