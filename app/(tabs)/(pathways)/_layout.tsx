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
        name="index"
        options={{
          title: "Pathways",
        }}
      />
      <Stack.Screen
        name="(skills)"
        options={{
          title: "Skill Tree",
        }}
      />
    </Stack>
  );
}