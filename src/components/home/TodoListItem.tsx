import { StyleSheet, View, Text, Alert } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useQueryClient, useMutation } from "@tanstack/react-query";

import Card from "@/components/common/Card";
import IconButton from "../ui/IconButton";

import { Tables } from "@/types/database.types";
import { useThemeContext } from "@/providers/ThemeProvider";

import * as TodosAPI from "@/api/todos";

type TodoListItemProps = {
  todo: Tables<"todos">;
};

export default function TodoListItem({ todo }: TodoListItemProps) {
  const { colors } = useThemeContext();

  const queryClient = useQueryClient();

  const { mutate: toggleTodo } = useMutation({
    mutationFn: () => TodosAPI.toggleTodo(todo.id, !todo.is_completed),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const { mutate: deleteTodo } = useMutation({
    mutationFn: () => TodosAPI.deleteTodo(todo.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleDeleteTodo = () => {
    Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
      { text: "Cancel", style: "default" },
      { text: "Delete", style: "destructive", onPress: () => deleteTodo() },
    ]);
  };

  return (
    <Card>
      <View style={styles.container}>
        <Ionicons
          name="checkmark-circle"
          size={38}
          color={todo.is_completed ? colors.success : colors.textMuted}
          onPress={() => toggleTodo()}
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
              onPress={handleDeleteTodo}
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
