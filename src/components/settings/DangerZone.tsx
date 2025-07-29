import { StyleSheet, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Section from "@/components/common/Section";
import Card from "@/components/common/Card";
import IconButton from "@/components/ui/IconButton";

import { useThemeContext } from "@/providers/ThemeProvider";

export default function DangerZone() {
  const { colors } = useThemeContext();

  return (
    <Section title="Danger Zone" titleStyle={{ color: colors.danger }}>
      <Card>
        <View style={styles.container}>
          <IconButton
            icon={<Ionicons name="trash" size={22} color="white" />}
            type="danger"
          />

          <Text style={[styles.title, { color: colors.text }]}>Reset App</Text>

          <Ionicons name="chevron-forward" size={22} color={colors.textMuted} />
        </View>
      </Card>
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
