import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
} from "react-native";

import { useThemeContext } from "@/providers/ThemeProvider";

export default function TextInput({ ...rest }: TextInputProps) {
  const { colors } = useThemeContext();

  return (
    <RNTextInput
      {...rest}
      placeholderTextColor={colors.textMuted}
      style={[
        styles.textInput,
        {
          color: colors.text,
          backgroundColor: colors.container,
          borderColor: colors.textMuted,
        },
        rest.style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 16,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
});
