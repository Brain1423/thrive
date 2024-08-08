import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { router } from "expo-router";
import VideoScreen from "@/components/VideoScreen";
const screenWidth = Dimensions.get("window").width;

const FrontEndSkillPage = () => {
  return (
    <View>
      <View style={styles.topContainer}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <TabBarIcon name="arrow-back" size={40} />
        </Pressable>
        <Text style={styles.pageTitle}>Skill Tree</Text>
      </View>
      <View>
        <View style={styles.videoContainer}>
          <VideoScreen />
        </View>
        <View style={{ top: 100 }} pointerEvents="none">
          <Image
            source={require("@/assets/images/cs-tree/description.png")}
            style={{ width: screenWidth, resizeMode: "contain", height: 850 }}
          />
        </View>
      </View>
    </View>
  );
};

export default FrontEndSkillPage;

const styles = StyleSheet.create({
  topContainer: {
    top: 60,
    flexDirection: "row",
  },
  backButton: {
    // position: "absolute",
    left: 20,
    // top: 10,
  },
  pageTitle: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",

    left: 105,
    // textShadowColor: "rgba(0, 0, 0, 0.25)",
    // textShadowOffset: { width: 0, height: 4 },
    // textShadowRadius: 4,
  },

  videoContainer: {
    width: "100%",
    top: 200,
  },
});
