import { StyleSheet, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Card from "@/components/common/Card";
import IconButton from "../ui/IconButton";

import { Tables } from "@/types/database.types";
import { useThemeContext } from "@/providers/ThemeProvider";

type TodoListItemProps = {
  todo: Tables<"todos">;
};

export default function TodoListItem({ todo }: TodoListItemProps) {
  const { colors } = useThemeContext();

  return (
    <Card>
      <View style={styles.container}>
        <Ionicons
          name={todo.is_completed ? "checkmark-circle" : "pause-circle"}
          size={38}
          color={todo.is_completed ? colors.success : colors.textMuted}
        />

        <View style={{ gap: 16 }}>
          <Text style={[styles.text, { color: colors.text }]}>{todo.text}</Text>

          <View style={styles.actionsContainer}>
            <IconButton
              icon={<Ionicons name="pencil" size={18} color="white" />}
              size="sm"
              type="warning"
              rounded
            />
            <IconButton
              icon={<Ionicons name="trash" size={18} color="white" />}
              size="sm"
              type="danger"
              rounded
            />
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});
