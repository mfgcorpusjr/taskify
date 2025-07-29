import { StyleSheet, View, Text } from "react-native";

import Card from "@/components/common/Card";

import { useThemeContext } from "@/providers/ThemeProvider";

type Type = "primary" | "info" | "success" | "warning" | "danger";

type ProgressStatsItemProps = {
  icon: React.ReactNode;
  title: number;
  subTitle: string;
  borderType: Type;
};

export default function ProgressStatsItem({
  icon,
  title,
  subTitle,
  borderType,
}: ProgressStatsItemProps) {
  const { colors } = useThemeContext();

  return (
    <Card borderType={borderType}>
      <View style={styles.container}>
        <View>{icon}</View>

        <View style={{ gap: 4 }}>
          <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
          <Text style={{ color: colors.textMuted }}>{subTitle}</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
});
