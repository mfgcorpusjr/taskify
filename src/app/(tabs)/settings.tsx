import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

import IconButton from "@/components/IconButton";

import { useThemeContext } from "@/providers/ThemeProvider";

export default function SettingsScreen() {
  const { colors } = useThemeContext();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <IconButton
          icon={<Ionicons name="settings" size={26} color="white" />}
          size="lg"
        />
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          Settings
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
