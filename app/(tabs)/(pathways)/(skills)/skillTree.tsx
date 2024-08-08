import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const skills = [
  {
    skillText: "Front-End Development",
    source: require("@/assets/images/cs-tree/front-end.png"),
  },
  {
    skillText: "Back-End Development",
    source: require("@/assets/images/cs-tree/back-end.png"),
  },
  {
    skillText: "Full-Stack Development",
    source: require("@/assets/images/cs-tree/full-stack.png"),
  },
  {
    skillText: "Cybersecurity",
    source: require("@/assets/images/cs-tree/cyber-security.png"),
  },
  // Add more skills as needed
];

const SkillTreePage = () => {
  return (
    <View>
      <View style={styles.topContainer}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <TabBarIcon name="arrow-back" size={40} />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Skill Tree</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <TouchableOpacity
          onPress={() => router.navigate("frontEndSkill")}
          activeOpacity={0.8}
        >
          <ImageBackground
            source={skills[0].source}
            style={styles.skillContainer}
          >
            <LinearGradient
              colors={["rgba(0, 0, 0, 0.00)", "rgba(0, 0, 0, 0.90)"]}
              style={styles.gradient}
            >
              <Text style={styles.skillText}>{skills[0].skillText}</Text>
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>
        {skills.slice(1).map((skill, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            onPress={() => router.navigate("frontEndSkill")}
          >
            <ImageBackground
              key={index}
              source={skill.source}
              style={styles.skillContainer}
            >
              <LinearGradient
                colors={["rgba(0, 0, 0, 0.00)", "rgba(0, 0, 0, 0.90)"]}
                style={styles.gradient}
              >
                <Text style={styles.skillText}>{skill.skillText}</Text>
              </LinearGradient>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SkillTreePage;

const styles = StyleSheet.create({
  pageTitle: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",

    left: 105,
    // textShadowColor: "rgba(0, 0, 0, 0.25)",
    // textShadowOffset: { width: 0, height: 4 },
    // textShadowRadius: 4,
  },
  topContainer: {
    top: 60,
    flexDirection: "row",
  },
  backButton: {
    // position: "absolute",
    left: 20,
    // top: 10,
  },
  skillContainer: {
    width: 408,
    height: 186,
    borderRadius: 10,
    overflow: "hidden",
    alignSelf: "center",
    justifyContent: "center",

    marginBottom: 20,
  },
  skillText: {
    color: "white",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "center",
  },
  scrollContainer: {
    top: 85,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
