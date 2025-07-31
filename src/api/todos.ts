import { supabase } from "@/lib/supabase";
import { TablesUpdate } from "@/types/database.types";

export const getTodos = async () => {
  const { data } = await supabase
    .from("todos")
    .select("*")
    .order("created_at", { ascending: false })
    .throwOnError();

  return data;
};

export const getPaginatedTodos = async ({
  offset = 0,
  limit = 10,
}: {
  offset?: number;
  limit?: number;
}) => {
  const { data } = await supabase
    .from("todos")
    .select("*")
    .order("id", { ascending: false })
    .range(offset, offset + limit - 1)
    .throwOnError();

  return data;
};

export const createTodo = async (text: string) => {
  const { data } = await supabase.from("todos").insert({ text }).throwOnError();

  return data;
};

export const updateTodo = async (id: number, text: string) => {
  const { data } = await supabase
    .from("todos")
    .update({ text })
    .eq("id", id)
    .select()
    .throwOnError();

  return data;
};

export const deleteTodo = async (id: number) => {
  const { data } = await supabase
    .from("todos")
    .delete()
    .eq("id", id)
    .select()
    .throwOnError();

  return data;
};

export const deleteTodos = async () => {
  const { data } = await supabase
    .from("todos")
    .delete()
    .neq("id", 0)
    .select()
    .throwOnError();

  return data;
};

export const toggleTodo = async (id: number, value: boolean) => {
  const { data } = await supabase
    .from("todos")
    .update({ is_completed: value })
    .eq("id", id)
    .throwOnError();

  return data;
};
