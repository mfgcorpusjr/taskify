import { View, Text } from "react-native";

import Card from "@/components/common/Card";

import { Tables } from "@/types/database.types";
import { useThemeContext } from "@/providers/ThemeProvider";

type TodoListItemProps = {
  todo: Tables<"todos">;
};

export default function TodoListItem({ todo }: TodoListItemProps) {
  const { colors } = useThemeContext();

  return (
    <Card>
      <Text style={{ color: colors.text }}>{todo.text}</Text>
    </Card>
  );
}
