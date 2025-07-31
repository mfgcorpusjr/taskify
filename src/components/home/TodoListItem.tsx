import { StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Card from "@/components/common/Card";
import TodoDetails from "@/components/home/TodoDetails";
import UpdateTodoForm from "@/components/home/UpdateTodoForm";

import { useThemeContext } from "@/providers/ThemeProvider";
import useToggleTodo from "@/hooks/useToggleTodo";
import useTodoStore from "@/store/useTodoStore";
import { Tables } from "@/types/database.types";

type TodoListItemProps = {
  todo: Tables<"todos">;
};

export default function TodoListItem({ todo }: TodoListItemProps) {
  const { colors } = useThemeContext();

  const { toggleTodo } = useToggleTodo(todo);

  const selectedTodo = useTodoStore((state) => state.selectedTodo);

  return (
    <Card>
      <View style={styles.container}>
        <Ionicons
          name="checkmark-circle"
          size={38}
          color={todo.is_completed ? colors.success : colors.textMuted}
          onPress={() => toggleTodo()}
        />

        {todo.id === selectedTodo?.id ? (
          <UpdateTodoForm />
        ) : (
          <TodoDetails todo={todo} />
        )}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
  },
});
