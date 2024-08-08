import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Pathways",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"home"} color={focused ? "#FFB26B" : "black"} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "walk" : "walk-outline"}
              color={focused ? "#FFB26B" : "black"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="random"
        options={{
          title: "Job",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "briefcase" : "briefcase-outline"}
              color={focused ? "#FFB26B" : "black"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
