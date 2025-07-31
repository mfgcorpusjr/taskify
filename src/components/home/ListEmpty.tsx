import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useThemeContext } from "@/providers/ThemeProvider";

type ListEmptyProps = {
  isLoading?: boolean;
  title: string;
  subTitle?: string;
};

export default function ListEmpty({
  isLoading,
  title,
  subTitle,
}: ListEmptyProps) {
  const { colors } = useThemeContext();

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator color={colors.text} />
      ) : (
        <>
          <Ionicons name="clipboard-outline" size={40} color={colors.text} />

          <View style={styles.textContainer}>
            <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
            <Text style={{ color: colors.textMuted }}>{subTitle}</Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  textContainer: {
    gap: 8,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
});
