import { PropsWithChildren } from "react";
import { StyleSheet, View, Text, StyleProp, TextStyle } from "react-native";

import { useThemeContext } from "@/providers/ThemeProvider";

type SectionProps = {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
};

export default function Section({
  title,
  titleStyle,
  children,
}: PropsWithChildren<SectionProps>) {
  const { colors } = useThemeContext();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }, titleStyle]}>
        {title}
      </Text>

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
});
