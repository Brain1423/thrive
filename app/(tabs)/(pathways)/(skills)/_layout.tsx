import { Stack } from "expo-router";
import React from "react";

import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="skillTree"
        options={{
          title: "Skill Tree",
        }}
      />
      {/* <Stack.Screen
        name="home"
        options={{
          title: "Pathways",
        }}
      /> */}
    </Stack>
  );
}
