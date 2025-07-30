import { useState } from "react";
import { Alert } from "react-native";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import * as TodosAPI from "@/api/todos";

const useCreateTodo = () => {
  const [input, setInput] = useState("");

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => TodosAPI.createTodo(input.trim()),
    onSuccess: () => {
      setInput("");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.log(error.message);
      Alert.alert("Error", "Failed to create todo");
    },
  });

  return {
    input,
    setInput,
    create: mutate,
  };
};

export default useCreateTodo;
