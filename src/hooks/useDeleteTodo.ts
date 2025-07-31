import { Alert } from "react-native";
import { useQueryClient, useMutation } from "@tanstack/react-query";

import { Tables } from "@/types/database.types";
import * as TodosAPI from "@/api/todos";

const useDeleteTodo = (todo: Tables<"todos">) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => TodosAPI.deleteTodo(todo.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleDeleteTodo = () => {
    Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
      { text: "Cancel", style: "default" },
      { text: "Delete", style: "destructive", onPress: () => mutate() },
    ]);
  };

  return {
    deleteTodo: handleDeleteTodo,
  };
};

export default useDeleteTodo;
