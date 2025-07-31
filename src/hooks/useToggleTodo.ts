import { useQueryClient, useMutation } from "@tanstack/react-query";

import { Tables } from "@/types/database.types";
import * as TodosAPI from "@/api/todos";

const useToggleTodo = (todo: Tables<"todos">) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => TodosAPI.toggleTodo(todo.id, !todo.is_completed),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return {
    toggleTodo: mutate,
  };
};

export default useToggleTodo;
