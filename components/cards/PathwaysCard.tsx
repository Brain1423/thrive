import React from "react";
import {
  View,
  Pressable,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface PathwaysCardProps {
  course: {
    image: string;
    title: string;
  };
  handleCardPress: () => void;
}

const PathwaysCard: React.FC<PathwaysCardProps> = ({
  course,
  handleCardPress,
}) => {
  return (
    <View style={styles.courseCard}>
      <TouchableOpacity activeOpacity={0.8} onPress={handleCardPress}>
        <ImageBackground source={{ uri: course.image }} style={styles.image}>
          <View style={styles.overlay}>
            <Text style={styles.courseTitle}>{course.title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  courseCard: {
    height: 202,
    width: 172,
    marginBottom: 24,
    marginRight: 10,
    marginLeft: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
  },
  overlay: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  courseTitle: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
    bottom: 15,
    position: "absolute",
    fontWeight: "700",
    width: 110,
  },
});

export default PathwaysCard;
