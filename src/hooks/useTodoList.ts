import { useQuery } from "@tanstack/react-query";

import * as TodosAPI from "@/api/todos";

const useTodoList = () => {
  const mutate = useQuery({
    queryKey: ["todos"],
    queryFn: TodosAPI.getTodos,
  });

  return mutate;
};

export default useTodoList;
