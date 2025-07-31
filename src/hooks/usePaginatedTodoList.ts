import { useState, useCallback } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import * as TodosAPI from "@/api/todos";

const usePaginatedTodoList = () => {
  const mutate = useInfiniteQuery({
    queryKey: ["todos", { paginated: true }],
    queryFn: ({ pageParam }) => TodosAPI.getPaginatedTodos(pageParam),
    initialPageParam: { offset: 0, limit: 10 },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined;

      return {
        offset: allPages.flat().length,
        limit: 10,
      };
    },
  });

  const [isRefetching, setIsRefetching] = useState(false);

  const refetch = useCallback(async () => {
    setIsRefetching(true);
    await mutate.refetch();
    setIsRefetching(false);
  }, []);

  return {
    ...mutate,
    isRefetching,
    refetch,
  };
};

export default usePaginatedTodoList;
