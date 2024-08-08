import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video, ResizeMode } from "expo-av";

export default function VideoScreen() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require("@/assets/videos/front_end_video.mp4")}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  video: {
    width: "100%",
    height: 235,
  },
});
