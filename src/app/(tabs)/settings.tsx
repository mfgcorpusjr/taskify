import { StyleSheet, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Wrapper from "@/components/common/Wrapper";
import Header from "@/components/common/Header";
import IconButton from "@/components/ui/IconButton";
import ProgressStats from "@/components/settings/ProgressStats";
import Preferences from "@/components/settings/Preferences";
import DangerZone from "@/components/settings/DangerZone";

import useTodoList from "@/hooks/useTodoList";

export default function SettingsScreen() {
  const { data } = useTodoList();

  const totalTodos = data?.length || 0;
  const completedTodos = data?.filter((d) => d.is_completed).length || 0;
  const activeTodos = totalTodos - completedTodos;

  return (
    <Wrapper>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Header
          icon={
            <IconButton
              icon={<Ionicons name="settings" size={26} color="white" />}
              size="lg"
              type="info"
            />
          }
          title="Settings"
        />

        <ProgressStats
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          activeTodos={activeTodos}
        />

        <Preferences />

        <DangerZone totalTodos={totalTodos} />
      </ScrollView>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    gap: 40,
    padding: 16,
  },
});
