import { create } from "zustand";

import { Tables } from "@/types/database.types";

type TodoStore = {
  selectedTodo: Tables<"todos"> | undefined;
  selectTodo: (todo: Tables<"todos"> | undefined) => void;
};

const useTodoStore = create<TodoStore>((set) => ({
  selectedTodo: undefined,

  selectTodo: (todo: Tables<"todos"> | undefined) => {
    set({ selectedTodo: todo });
  },
}));

export default useTodoStore;
