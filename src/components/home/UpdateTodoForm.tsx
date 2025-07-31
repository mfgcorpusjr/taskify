import { StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import TextInput from "@/components/ui/TextInput";
import Button from "@/components/ui/Button";

import useUpdateTodo from "@/hooks/useUpdateTodo";
import useTodoStore from "@/store/useTodoStore";
import { useThemeContext } from "@/providers/ThemeProvider";

export default function UpdateTodoForm() {
  const { input, setInput, update } = useUpdateTodo();

  const selectTodo = useTodoStore((state) => state.selectTodo);

  const { colors } = useThemeContext();

  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        onChangeText={setInput}
        multiline
        autoCorrect={false}
        autoCapitalize="none"
        scrollEnabled={false}
      />

      <View style={styles.actionsContainer}>
        <Button
          text="Cancel"
          icon={<Ionicons name="close" size={18} color={colors.buttonText} />}
          onPress={() => selectTodo(undefined)}
        />

        <Button
          text="Save"
          icon={
            <Ionicons name="checkmark" size={18} color={colors.buttonText} />
          }
          disabled={input.trim().length === 0}
          onPress={() => update()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});
