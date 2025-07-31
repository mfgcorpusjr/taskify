import { StyleSheet, Pressable, Text, PressableProps } from "react-native";

import { useThemeContext } from "@/providers/ThemeProvider";

type ButtonProps = {
  text: string;
  icon: React.ReactNode;
} & PressableProps;

export default function Button({ text, icon, ...rest }: ButtonProps) {
  const { colors } = useThemeContext();

  return (
    <Pressable
      {...rest}
      style={[
        styles.container,
        { opacity: rest.disabled ? 0.5 : 1, backgroundColor: colors.button },
      ]}
    >
      {icon}

      <Text style={[styles.text, { color: colors.buttonText }]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    gap: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});
