import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import useTodoStore from "@/store/useTodoStore";
import * as TodosAPI from "@/api/todos";

const useUpdateTodo = () => {
  const [input, setInput] = useState("");

  const selectedTodo = useTodoStore((state) => state.selectedTodo);
  const selectTodo = useTodoStore((state) => state.selectTodo);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (selectedTodo) {
      setInput(selectedTodo.text);
    }
  }, [selectedTodo]);

  const { mutate } = useMutation({
    mutationFn: () => TodosAPI.updateTodo(selectedTodo?.id!, input.trim()),
    onSuccess: () => {
      setInput("");
      selectTodo(undefined);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.log(error.message);
      Alert.alert("Error", "Failed to update todo");
    },
  });

  return {
    input,
    setInput,
    update: mutate,
  };
};

export default useUpdateTodo;
