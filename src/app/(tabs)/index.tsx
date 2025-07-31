import {
  FlatList,
  ActivityIndicator,
  RefreshControl,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import Wrapper from "@/components/common/Wrapper";
import HomeHeader from "@/components/home/HomeHeader";
import ListEmpty from "@/components/home/ListEmpty";
import TodoListItem from "@/components/home/TodoListItem";

import { useThemeContext } from "@/providers/ThemeProvider";
import usePaginatedTodoList from "@/hooks/usePaginatedTodoList";

export default function HomeScreen() {
  const {
    isLoading,
    data,
    isRefetching,
    refetch,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = usePaginatedTodoList();

  const { colors } = useThemeContext();

  return (
    <Wrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <FlatList
          data={data?.pages.flat() || []}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <TodoListItem todo={item} />}
          refreshControl={
            <RefreshControl
              refreshing={isRefetching}
              onRefresh={refetch}
              tintColor={colors.text}
            />
          }
          onEndReached={() =>
            !isFetchingNextPage && hasNextPage && fetchNextPage()
          }
          ListHeaderComponent={() => <HomeHeader />}
          ListFooterComponent={
            isFetchingNextPage ? (
              <ActivityIndicator color={colors.text} />
            ) : null
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
      </KeyboardAvoidingView>
    </Wrapper>
  );
}
