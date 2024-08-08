import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { TabBarIcon } from "./navigation/TabBarIcon";
import { router } from "expo-router";

const SkillTreeHeader = () => {
  return (
    <View style={styles.topContainer}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <TabBarIcon name="arrow-back" size={40} />
      </Pressable>
      <Text style={styles.pageTitle}>Skill Tree</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#fff",
  },
  backButton: {
    padding: 8,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default SkillTreeHeader;
