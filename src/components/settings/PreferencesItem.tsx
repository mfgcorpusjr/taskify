import { StyleSheet, View, Text, Switch } from "react-native";

import Card from "@/components/common/Card";

import { useThemeContext } from "@/providers/ThemeProvider";

type Type = "primary" | "info" | "success" | "warning" | "danger";

type PreferencesItemProps = {
  icon: React.ReactNode;
  title: string;
  switchType: Type;
  value?: boolean | undefined;
  onValueChange?: ((value: boolean) => Promise<void> | void) | null | undefined;
};

export default function PreferencesItem({
  icon,
  title,
  switchType,
  value,
  onValueChange,
}: PreferencesItemProps) {
  const { colors } = useThemeContext();

  return (
    <Card>
      <View style={styles.container}>
        {icon}

        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>

        <Switch
          trackColor={{ false: "#767577", true: colors[switchType] }}
          value={value}
          onValueChange={onValueChange}
        />
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
    flex: 1,
    fontWeight: "600",
  },
});
