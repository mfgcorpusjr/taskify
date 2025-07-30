import { StyleSheet, View, Text } from "react-native";

import { useThemeContext } from "@/providers/ThemeProvider";

type ProgressBarProps = {
  value: number;
};

export default function ProgressBar({ value }: ProgressBarProps) {
  const { colors } = useThemeContext();

  return (
    <View style={styles.container}>
      <View style={[styles.bar, { backgroundColor: colors.container }]}>
        <View style={{ backgroundColor: colors.success, width: `${value}%` }} />
      </View>

      <Text style={[styles.value, { color: colors.success }]}>{value}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  bar: {
    flex: 1,
    flexDirection: "row",
    height: 12,
    borderRadius: 100,
    overflow: "hidden",
  },
  value: {
    fontWeight: "600",
  },
});
