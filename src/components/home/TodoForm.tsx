import { StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import TextInput from "@/components/ui/TextInput";
import IconButton from "@/components/ui/IconButton";

import useCreateTodo from "@/hooks/useCreateTodo";

export default function TodoForm() {
  const { input, setInput, create } = useCreateTodo();

  return (
    <View style={styles.container}>
      <TextInput
        style={{ flex: 1 }}
        value={input}
        onChangeText={setInput}
        placeholder="What needs to be done?"
        autoCorrect={false}
        autoCapitalize="none"
      />

      <View>
        <IconButton
          icon={<Ionicons name="add" size={22} color="white" />}
          type="info"
          disabled={input.trim().length === 0}
          onPress={() => create()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});
