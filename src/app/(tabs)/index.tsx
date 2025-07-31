import { FlatList, ActivityIndicator } from "react-native";
import { useInfiniteQuery } from "@tanstack/react-query";

import Wrapper from "@/components/common/Wrapper";
import HomeHeader from "@/components/home/HomeHeader";
import ListEmpty from "@/components/home/ListEmpty";
import TodoListItem from "@/components/home/TodoListItem";

import { useThemeContext } from "@/providers/ThemeProvider";
import * as TodosAPI from "@/api/todos";

export default function HomeScreen() {
  const {
    data,
    isLoading,
    refetch,
    isRefetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
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

  const { colors } = useThemeContext();

  return (
    <Wrapper>
      <FlatList
        data={data?.pages.flat() || []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TodoListItem todo={item} />}
        onEndReached={() =>
          !isFetchingNextPage && hasNextPage && fetchNextPage()
        }
        ListHeaderComponent={() => <HomeHeader />}
        ListFooterComponent={
          isFetchingNextPage ? <ActivityIndicator color={colors.text} /> : null
        }
        ListEmptyComponent={() => (
          <ListEmpty
            isLoading={isLoading}
            title="No todos yet"
            subTitle="Add your first todo above to get started"
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 16, padding: 16 }}
      />
    </Wrapper>
  );
}
