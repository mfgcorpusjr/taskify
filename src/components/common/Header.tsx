import { StyleSheet, View, Text } from "react-native";

import { useThemeContext } from "@/providers/ThemeProvider";

type HeaderProps = {
  icon: React.ReactNode;
  title: string;
  subTitle?: string;
};

export default function Header({ icon, title, subTitle }: HeaderProps) {
  const { colors } = useThemeContext();

  return (
    <View style={styles.container}>
      <View>{icon}</View>

      <View style={{ gap: 4 }}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        {subTitle && (
          <Text style={{ color: colors.textMuted }}>{subTitle}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
