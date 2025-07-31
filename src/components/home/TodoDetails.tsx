import { StyleSheet, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import IconButton from "@/components/ui/IconButton";

import { useThemeContext } from "@/providers/ThemeProvider";
import useTodoStore from "@/store/useTodoStore";
import useDeleteTodo from "@/hooks/useDeleteTodo";
import { Tables } from "@/types/database.types";

type TodoDetailsProps = {
  todo: Tables<"todos">;
};

export default function TodoDetails({ todo }: TodoDetailsProps) {
  const { colors } = useThemeContext();

  const selectTodo = useTodoStore((state) => state.selectTodo);

  const { deleteTodo } = useDeleteTodo(todo);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: colors.text }]}>{todo.text}</Text>

      <View style={styles.actionsContainer}>
        <IconButton
          icon={<Ionicons name="pencil" size={18} color="white" />}
          size="sm"
          type="warning"
          rounded
          onPress={() => selectTodo(todo)}
        />
        <IconButton
          icon={<Ionicons name="trash" size={18} color="white" />}
          size="sm"
          type="danger"
          rounded
          onPress={() => deleteTodo()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
