import { StatusBar } from "expo-status-bar";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useThemeContext } from "@/providers/ThemeProvider";

export default function TabsLayout() {
  const { theme, colors } = useThemeContext();

  return (
    <>
      <StatusBar style={theme === "light" ? "dark" : "light"} />

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.info,
          headerShown: false,
          sceneStyle: {
            backgroundColor: colors.background,
          },
          tabBarStyle: { backgroundColor: colors.container },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Todos",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="flash" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
