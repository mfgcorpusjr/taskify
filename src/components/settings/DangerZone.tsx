import { StyleSheet, View, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Section from "@/components/common/Section";
import Card from "@/components/common/Card";
import IconButton from "@/components/ui/IconButton";

import { useThemeContext } from "@/providers/ThemeProvider";
import useResetApp from "@/hooks/useResetApp";

type DangerZoneProps = {
  totalTodos: number;
};

export default function DangerZone({ totalTodos }: DangerZoneProps) {
  const { colors } = useThemeContext();

  const { resetApp } = useResetApp(totalTodos);

  return (
    <Section title="Danger Zone" titleStyle={{ color: colors.danger }}>
      <Pressable onPress={resetApp}>
        <Card>
          <View style={styles.container}>
            <IconButton
              icon={<Ionicons name="trash" size={22} color="white" />}
              type="danger"
            />

            <Text style={[styles.title, { color: colors.text }]}>
              Reset App
            </Text>

            <Ionicons
              name="chevron-forward"
              size={22}
              color={colors.textMuted}
            />
          </View>
        </Card>
      </Pressable>
    </Section>
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
