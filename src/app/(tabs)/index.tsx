import { StyleSheet, View, Text, Button } from "react-native";

import { useThemeContext } from "@/providers/ThemeProvider";
export default function HomeScreen() {
  const { toggleTheme } = useThemeContext();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
